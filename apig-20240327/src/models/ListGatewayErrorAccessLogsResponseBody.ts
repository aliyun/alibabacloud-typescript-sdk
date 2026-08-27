// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGatewayErrorAccessLogsResponseBody extends $dara.Model {
  data?: { [key: string]: string }[];
  /**
   * @remarks
   * Id of the request
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

