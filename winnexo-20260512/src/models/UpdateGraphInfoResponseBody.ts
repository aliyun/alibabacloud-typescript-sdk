// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGraphInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * 更新后的业务说明，未设置时为空
   * 
   * @example
   * 客户域语义图谱
   */
  businessProfile?: string;
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
   * 更新后的图谱展示名，未设置时为空
   * 
   * @example
   * CRM 图谱
   */
  displayName?: string;
  /**
   * @remarks
   * 图谱名称
   * 
   * @example
   * crm_graph
   */
  graphName?: string;
  /**
   * @remarks
   * 错误描述，成功时为空
   * 
   * @example
   * ok
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
   * 是否更新成功
   * 
   * @example
   * true
   */
  updated?: boolean;
  static names(): { [key: string]: string } {
    return {
      businessProfile: 'businessProfile',
      code: 'code',
      displayName: 'displayName',
      graphName: 'graphName',
      message: 'message',
      requestId: 'requestId',
      updated: 'updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessProfile: 'string',
      code: 'string',
      displayName: 'string',
      graphName: 'string',
      message: 'string',
      requestId: 'string',
      updated: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

