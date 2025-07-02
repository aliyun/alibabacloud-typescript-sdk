// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDeviceUpgradeStatusResponseBodyDataAppOtaStatusDTOList } from "./GetDeviceUpgradeStatusResponseBodyDataAppOtaStatusDtolist";


export class GetDeviceUpgradeStatusResponseBodyData extends $dara.Model {
  appOtaStatusDTOList?: GetDeviceUpgradeStatusResponseBodyDataAppOtaStatusDTOList[];
  static names(): { [key: string]: string } {
    return {
      appOtaStatusDTOList: 'AppOtaStatusDTOList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appOtaStatusDTOList: { 'type': 'array', 'itemType': GetDeviceUpgradeStatusResponseBodyDataAppOtaStatusDTOList },
    };
  }

  validate() {
    if(Array.isArray(this.appOtaStatusDTOList)) {
      $dara.Model.validateArray(this.appOtaStatusDTOList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

