// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGraphsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * 图谱业务说明，未配置时为空字符串
   * 
   * This parameter is required.
   * 
   * @example
   * string_value
   */
  businessProfile?: string;
  /**
   * @remarks
   * 图谱显示名称
   * 
   * This parameter is required.
   * 
   * @example
   * string_value
   */
  displayName?: string;
  /**
   * @remarks
   * 图谱名称，传给 querySemanticKnowledge.graphName
   * 
   * This parameter is required.
   * 
   * @example
   * string_value
   */
  graphName?: string;
  /**
   * @remarks
   * 是否为租户默认图谱
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  isDefault?: boolean;
  static names(): { [key: string]: string } {
    return {
      businessProfile: 'businessProfile',
      displayName: 'displayName',
      graphName: 'graphName',
      isDefault: 'isDefault',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessProfile: 'string',
      displayName: 'string',
      graphName: 'string',
      isDefault: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGraphsResponseBody extends $dara.Model {
  /**
   * @remarks
   * 业务状态码：成功为 200，失败为后端错误码（ERR.* / InvalidParameter.*）
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * 租户下可用于语义查询的已发布图谱列表
   * 
   * This parameter is required.
   */
  items?: ListGraphsResponseBodyItems[];
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
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      items: 'items',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      items: { 'type': 'array', 'itemType': ListGraphsResponseBodyItems },
      message: 'string',
      requestId: 'string',
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

