// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPrometheusUserSettingResponseBody extends $dara.Model {
  prometheusUserSetting?: { [key: string]: string };
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 058550FA-DDBE-519E-9C6D-93521B9A5E90
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      prometheusUserSetting: 'prometheusUserSetting',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      prometheusUserSetting: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(this.prometheusUserSetting) {
      $dara.Model.validateMap(this.prometheusUserSetting);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

