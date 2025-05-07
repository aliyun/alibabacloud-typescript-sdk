// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRdsResourceSettingsResponseBodyRdsInstanceResourceSettings } from "./DescribeRdsResourceSettingsResponseBodyRdsInstanceResourceSettings";


export class DescribeRdsResourceSettingsResponseBody extends $dara.Model {
  rdsInstanceResourceSettings?: DescribeRdsResourceSettingsResponseBodyRdsInstanceResourceSettings;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      rdsInstanceResourceSettings: 'RdsInstanceResourceSettings',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rdsInstanceResourceSettings: DescribeRdsResourceSettingsResponseBodyRdsInstanceResourceSettings,
      requestId: 'string',
    };
  }

  validate() {
    if(this.rdsInstanceResourceSettings && typeof (this.rdsInstanceResourceSettings as any).validate === 'function') {
      (this.rdsInstanceResourceSettings as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

