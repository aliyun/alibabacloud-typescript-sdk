// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePersonalVoiceMeetingHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @remarks
   * 请求追踪 ID
   * 
   * This parameter is required.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

