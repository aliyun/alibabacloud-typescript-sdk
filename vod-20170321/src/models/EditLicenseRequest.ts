// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EditLicenseRequest extends $dara.Model {
  appItemId?: string;
  appName?: string;
  appPlatforms?: string;
  contractNo?: string;
  instanceId?: string;
  sdkModels?: string;
  static names(): { [key: string]: string } {
    return {
      appItemId: 'AppItemId',
      appName: 'AppName',
      appPlatforms: 'AppPlatforms',
      contractNo: 'ContractNo',
      instanceId: 'InstanceId',
      sdkModels: 'SdkModels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appItemId: 'string',
      appName: 'string',
      appPlatforms: 'string',
      contractNo: 'string',
      instanceId: 'string',
      sdkModels: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

