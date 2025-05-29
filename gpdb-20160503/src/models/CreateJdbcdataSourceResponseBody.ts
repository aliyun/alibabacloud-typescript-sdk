// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateJDBCDataSourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * Data source ID.
   * 
   * @example
   * 123
   */
  dataSourceId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2C125605-266F-41CA-8AC5-3A643D4F42C5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceId: 'DataSourceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

