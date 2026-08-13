// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserVisibleKnowledgeBasesResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * 知识库创建人用户 ID
   * 
   * @example
   * 1
   */
  creatorId?: number;
  /**
   * @remarks
   * 知识库创建人名称
   * 
   * @example
   * 张三
   */
  creatorName?: string;
  /**
   * @remarks
   * 知识库描述
   * 
   * @example
   * 产品资料与使用说明
   */
  description?: string;
  /**
   * @remarks
   * 知识库根目录唯一标识
   * 
   * @example
   * dir_example
   */
  directoryId?: string;
  /**
   * @remarks
   * 目录归属类型
   * 
   * @example
   * normal
   */
  directoryKind?: string;
  /**
   * @remarks
   * 目录类型
   * 
   * @example
   * TENANT
   */
  directoryType?: string;
  /**
   * @remarks
   * 创建时间戳（毫秒）
   * 
   * @example
   * 1
   */
  gmtCreate?: number;
  /**
   * @remarks
   * 修改时间戳（毫秒）
   * 
   * @example
   * 1
   */
  gmtModified?: number;
  /**
   * @remarks
   * 知识库名称
   * 
   * @example
   * 产品知识库
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      creatorId: 'creatorId',
      creatorName: 'creatorName',
      description: 'description',
      directoryId: 'directoryId',
      directoryKind: 'directoryKind',
      directoryType: 'directoryType',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creatorId: 'number',
      creatorName: 'string',
      description: 'string',
      directoryId: 'string',
      directoryKind: 'string',
      directoryType: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserVisibleKnowledgeBasesResponseBody extends $dara.Model {
  /**
   * @remarks
   * 业务状态码：成功为 200，失败为后端错误码（ERR.* / InvalidParameter.*）
   * 
   * @example
   * 200
   */
  code?: string;
  items?: ListUserVisibleKnowledgeBasesResponseBodyItems[];
  /**
   * @remarks
   * 错误描述，成功时为空
   */
  message?: string;
  /**
   * @remarks
   * 请求追踪 ID
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * 知识库总数
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      items: 'items',
      message: 'message',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      items: { 'type': 'array', 'itemType': ListUserVisibleKnowledgeBasesResponseBodyItems },
      message: 'string',
      requestId: 'string',
      totalCount: 'number',
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

