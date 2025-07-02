// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDeviceVersionDetailRequest extends $dara.Model {
  model?: string;
  networkType?: string;
  region?: string;
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      model: 'Model',
      networkType: 'NetworkType',
      region: 'Region',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      model: 'string',
      networkType: 'string',
      region: 'string',
      versionName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

