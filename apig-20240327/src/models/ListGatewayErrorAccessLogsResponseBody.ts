// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGatewayErrorAccessLogsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of log entries. Each entry is a mapping from field names to field values.
   */
  data?: { [key: string]: string }[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C9BF49BD-3037-5006-B379-656ECBA6F56C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'string' } },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

