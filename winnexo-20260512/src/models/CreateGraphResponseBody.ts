// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGraphResponseBody extends $dara.Model {
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
   * 创建时绑定的数据源 ID
   * 
   * @example
   * 198001
   */
  dataSourceId?: number;
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
   * Schema 版本；快建路径固定 0.0.0，正式版本经控制台发布产生
   * 
   * @example
   * 0.0.0
   */
  schemaVersion?: string;
  /**
   * @remarks
   * 同步状态，快建成功为 SUCCESS
   * 
   * @example
   * SUCCESS
   */
  syncStatus?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      dataSourceId: 'dataSourceId',
      graphName: 'graphName',
      message: 'message',
      requestId: 'requestId',
      schemaVersion: 'schemaVersion',
      syncStatus: 'syncStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dataSourceId: 'number',
      graphName: 'string',
      message: 'string',
      requestId: 'string',
      schemaVersion: 'string',
      syncStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

