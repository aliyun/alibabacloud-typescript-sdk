// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateStreamingDataSourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * Data source ID.
   * 
   * @example
   * 1
   */
  dataSourceId?: number;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * B4CAF581-2AC7-41AD-8940-D56DF7AADF5B
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
      dataSourceId: 'number',
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

