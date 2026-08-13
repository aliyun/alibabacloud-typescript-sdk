// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSourceResponseBody extends $dara.Model {
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
   * 是否已删除
   * 
   * @example
   * true
   */
  deleted?: boolean;
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
   * 被删除的数据源 ID
   * 
   * @example
   * exampleSourceId
   */
  sourceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      deleted: 'deleted',
      message: 'message',
      requestId: 'requestId',
      sourceId: 'sourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      deleted: 'boolean',
      message: 'string',
      requestId: 'string',
      sourceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

