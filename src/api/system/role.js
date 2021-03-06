import request from '@/utils/request'
import getIds from '@/utils/idUtil';

export function getRoleList (page, size, key) {
    return request({
        url: '/role',
        method: 'get',
        params: { current: page, size: size, name: key }
    })
}

export function getById (id) {
    return request({
        url: '/role/' + id,
        method: 'get'
    })
}

export function saveOrupdate (data) {
    return request({
        url: '/role',
        method: data.method,
        data
    })
}

export function saveOrUpdateMenuByRoleId (roleId, menuIds) {
    return request({
        url: '/role/saveOrUpdateMenuByRoleId/' + roleId,
        method: 'post',
        data: menuIds
    })
}

export function delByIds (ids) {
    return request({
        url: '/role?idList=' + getIds(ids),
        method: 'delete'
    })
}