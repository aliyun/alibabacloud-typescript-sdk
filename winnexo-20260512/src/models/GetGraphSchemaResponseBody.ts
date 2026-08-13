// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGraphSchemaResponseBody extends $dara.Model {
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
   * 图谱名称
   * 
   * This parameter is required.
   * 
   * @example
   * string_value
   */
  graphName?: string;
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
   * 当前 active Graph Schema 版本
   * 
   * This parameter is required.
   * 
   * @example
   * string_value
   */
  schemaVersion?: string;
  /**
   * @remarks
   * 按 READ 权限裁剪的 Graph Schema 原始 YAML 文本，保留授权子图内的 $ref
   * 
   * This parameter is required.
   * 
   * @example
   * string_value
   */
  yamlEdit?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      graphName: 'graphName',
      message: 'message',
      requestId: 'requestId',
      schemaVersion: 'schemaVersion',
      yamlEdit: 'yamlEdit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      graphName: 'string',
      message: 'string',
      requestId: 'string',
      schemaVersion: 'string',
      yamlEdit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

