// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPlayConfigResponseBody extends $dara.Model {
  configType?: string;
  playDeviceAbilityList?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      configType: 'ConfigType',
      playDeviceAbilityList: 'PlayDeviceAbilityList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configType: 'string',
      playDeviceAbilityList: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.playDeviceAbilityList)) {
      $dara.Model.validateArray(this.playDeviceAbilityList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

