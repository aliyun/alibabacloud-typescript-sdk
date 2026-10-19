// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMemoryDetailResponseBodyGroupsItems extends $dara.Model {
  /**
   * @remarks
   * 自动记忆正文，不包含 YAML frontmatter
   * 
   * @example
   * 喜欢简洁的回答
   */
  content?: string;
  /**
   * @remarks
   * 自动记忆的附加描述；没有时为空字符串
   * 
   * @example
   * 来自近期会话的偏好总结
   */
  description?: string;
  /**
   * @remarks
   * 自动记忆条目的唯一标识，为相对 OSS 路径
   * 
   * @example
   * user/example.md
   */
  id?: string;
  /**
   * @remarks
   * 自动记忆标题，来自文件元数据或文件名
   * 
   * @example
   * 示例偏好
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      description: 'description',
      id: 'id',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      description: 'string',
      id: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMemoryDetailResponseBodyGroups extends $dara.Model {
  /**
   * @remarks
   * 该分组最近修改时间，Unix 秒级时间戳；无文件时为 null
   * 
   * @example
   * 1720000000
   */
  gmtModified?: number;
  /**
   * @remarks
   * 该类型下的自动记忆条目列表；没有条目时为空数组
   * 
   * @example
   * [{"id":"user/example.md","title":"示例偏好","content":"喜欢简洁的回答","description":"来自近期会话的偏好总结"}]
   */
  items?: GetMemoryDetailResponseBodyGroupsItems[];
  /**
   * @remarks
   * 自动记忆类型：user、feedback、reference 或 project
   * 
   * @example
   * user
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      gmtModified: 'gmtModified',
      items: 'items',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtModified: 'number',
      items: { 'type': 'array', 'itemType': GetMemoryDetailResponseBodyGroupsItems },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMemoryDetailResponseBodyProfile extends $dara.Model {
  /**
   * @remarks
   * 手动记忆的完整正文；未保存过时为空字符串
   * 
   * @example
   * 示例手动记忆
   */
  content?: string;
  /**
   * @remarks
   * profile.md 是否存在；未保存过时为 false
   * 
   * @example
   * true
   */
  exists?: boolean;
  /**
   * @remarks
   * profile.md 最近修改时间，Unix 秒级时间戳；文件不存在或无法取得元数据时为 null
   * 
   * @example
   * 1720000000
   */
  gmtModified?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      exists: 'exists',
      gmtModified: 'gmtModified',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      exists: 'boolean',
      gmtModified: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMemoryDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * 业务状态码；成功为 200，失败时为对应错误码
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * 自动拾取记忆的分组列表；无自动记忆时为空数组
   * 
   * @example
   * [{"type":"user","items":[{"id":"user/example.md","title":"示例偏好","content":"喜欢简洁的回答","description":"来自近期会话的偏好总结"}],"gmtModified":1720000000}]
   */
  groups?: GetMemoryDetailResponseBodyGroups[];
  /**
   * @remarks
   * 错误描述；成功时为空字符串，失败时返回具体原因
   * 
   * @example
   * 当前用户不是群组 cg_12345 的活跃成员
   */
  message?: string;
  /**
   * @remarks
   * 手动添加的记忆，来自 profile.md；包含完整内容、存在状态和修改时间
   * 
   * @example
   * {"content":"示例手动记忆","exists":true,"gmtModified":1720000000}
   */
  profile?: GetMemoryDetailResponseBodyProfile;
  /**
   * @remarks
   * 请求追踪 ID，用于定位本次调用
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      groups: 'groups',
      message: 'message',
      profile: 'profile',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      groups: { 'type': 'array', 'itemType': GetMemoryDetailResponseBodyGroups },
      message: 'string',
      profile: GetMemoryDetailResponseBodyProfile,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.groups)) {
      $dara.Model.validateArray(this.groups);
    }
    if(this.profile && typeof (this.profile as any).validate === 'function') {
      (this.profile as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

