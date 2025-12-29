// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceInstanceForPageResponseBodyModelRecords extends $dara.Model {
  /**
   * @remarks
   * aliUid
   * 
   * @example
   * 11******123
   */
  aliUid?: number;
  /**
   * @remarks
   * 服务实例号
   * 
   * @example
   * 0571****1234
   */
  code?: string;
  /**
   * @remarks
   * 创建时间（时间戳）
   * 
   * @example
   * 1759109856000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * 实例状态（init：初始化；usable：可用；unusable：不可用；destory：注销）
   * 
   * @example
   * init
   */
  instanceStatus?: string;
  /**
   * @remarks
   * 服务实例名称
   * 
   * @example
   * 测试数据
   */
  name?: string;
  /**
   * @remarks
   * 关联可用数量
   * 
   * @example
   * 30
   */
  relationAvailableCount?: number;
  /**
   * @remarks
   * 关联总数量
   * 
   * @example
   * 33
   */
  relationTotalCount?: number;
  /**
   * @remarks
   * 场景ID
   * 
   * @example
   * 29
   */
  sceneId?: number;
  /**
   * @remarks
   * 场景名称
   * 
   * @example
   * 系统通知
   */
  sceneName?: string;
  /**
   * @remarks
   * 绑定状态：绑定；未绑定
   * 
   * @example
   * 绑定
   */
  status?: string;
  /**
   * @remarks
   * 用途ID
   * 
   * @example
   * 96
   */
  usageId?: number;
  /**
   * @remarks
   * 用途名称
   * 
   * @example
   * 语音通知
   */
  usageName?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      code: 'Code',
      gmtCreate: 'GmtCreate',
      instanceStatus: 'InstanceStatus',
      name: 'Name',
      relationAvailableCount: 'RelationAvailableCount',
      relationTotalCount: 'RelationTotalCount',
      sceneId: 'SceneId',
      sceneName: 'SceneName',
      status: 'Status',
      usageId: 'UsageId',
      usageName: 'UsageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      code: 'string',
      gmtCreate: 'string',
      instanceStatus: 'string',
      name: 'string',
      relationAvailableCount: 'number',
      relationTotalCount: 'number',
      sceneId: 'number',
      sceneName: 'string',
      status: 'string',
      usageId: 'number',
      usageName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceInstanceForPageResponseBodyModel extends $dara.Model {
  /**
   * @remarks
   * 当前页码
   * 
   * @example
   * 47
   */
  pageNo?: number;
  /**
   * @remarks
   * 每页数量
   * 
   * @example
   * 59
   */
  pageSize?: number;
  records?: ListServiceInstanceForPageResponseBodyModelRecords[];
  /**
   * @remarks
   * 总数
   * 
   * @example
   * 36
   */
  totalCount?: number;
  /**
   * @remarks
   * 总页数
   * 
   * @example
   * 76
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      records: 'Records',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      records: { 'type': 'array', 'itemType': ListServiceInstanceForPageResponseBodyModelRecords },
      totalCount: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceInstanceForPageResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @remarks
   * 状态码，OK表示响应成功
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * 响应消息
   * 
   * @example
   * 每页最大100条！
   */
  message?: string;
  model?: ListServiceInstanceForPageResponseBodyModel;
  /**
   * @remarks
   * 请求唯一id
   * 
   * @example
   * ED18A5AE-9BBC-5851-1111-8E5B8C23CEDE
   */
  requestId?: string;
  /**
   * @remarks
   * 是否成功
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      message: 'string',
      model: ListServiceInstanceForPageResponseBodyModel,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.model && typeof (this.model as any).validate === 'function') {
      (this.model as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

