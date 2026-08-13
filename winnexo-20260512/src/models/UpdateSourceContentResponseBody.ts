// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSourceContentResponseBody extends $dara.Model {
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
   * 错误描述，成功时为空
   */
  message?: string;
  /**
   * @remarks
   * 文件名
   * 
   * This parameter is required.
   * 
   * @example
   * 示例名称.pdf
   */
  name?: string;
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
   * 数据源 ID
   * 
   * This parameter is required.
   * 
   * @example
   * exampleSourceId
   */
  sourceId?: string;
  /**
   * @remarks
   * 数据源类型
   * 
   * This parameter is required.
   * 
   * @example
   * string_value
   */
  sourceType?: string;
  /**
   * @remarks
   * 重新解析后的数据源状态
   * 
   * This parameter is required.
   * 
   * @example
   * READY
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      name: 'name',
      requestId: 'requestId',
      sourceId: 'sourceId',
      sourceType: 'sourceType',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      name: 'string',
      requestId: 'string',
      sourceId: 'string',
      sourceType: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

