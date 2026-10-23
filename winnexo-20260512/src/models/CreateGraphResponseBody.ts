// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGraphResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The data source ID.
   * 
   * @example
   * 198001
   */
  dataSourceId?: number;
  /**
   * @remarks
   * The graph name.
   * 
   * @example
   * crm_graph
   */
  graphName?: string;
  /**
   * @remarks
   * The status code description.
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * The version.
   * 
   * @example
   * 0.0.0
   */
  schemaVersion?: string;
  /**
   * @remarks
   * The OSS synchronization and extraction status. Valid values:
   * - -1: Not set (default).
   * - 0: Disabled.
   * - 1: Enabled.
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

