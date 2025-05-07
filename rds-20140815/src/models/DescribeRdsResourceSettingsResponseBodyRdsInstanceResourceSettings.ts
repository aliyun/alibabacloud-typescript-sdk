// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRdsResourceSettingsResponseBodyRdsInstanceResourceSettingsRdsInstanceResourceSetting } from "./DescribeRdsResourceSettingsResponseBodyRdsInstanceResourceSettingsRdsInstanceResourceSetting";


export class DescribeRdsResourceSettingsResponseBodyRdsInstanceResourceSettings extends $dara.Model {
  rdsInstanceResourceSetting?: DescribeRdsResourceSettingsResponseBodyRdsInstanceResourceSettingsRdsInstanceResourceSetting[];
  static names(): { [key: string]: string } {
    return {
      rdsInstanceResourceSetting: 'RdsInstanceResourceSetting',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rdsInstanceResourceSetting: { 'type': 'array', 'itemType': DescribeRdsResourceSettingsResponseBodyRdsInstanceResourceSettingsRdsInstanceResourceSetting },
    };
  }

  validate() {
    if(Array.isArray(this.rdsInstanceResourceSetting)) {
      $dara.Model.validateArray(this.rdsInstanceResourceSetting);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

