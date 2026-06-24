// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableKibanaPvlNetworkResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0DC92CFE-62AF-51AF-9D5B-F1078D7C451E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether private network access for Kibana is created. Valid values:
   * - true: The operation is successful.
   * - false: The operation failed.
   * 
   * @example
   * true
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

