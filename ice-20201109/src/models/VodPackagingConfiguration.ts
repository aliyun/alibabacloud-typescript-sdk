// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { VodPackagingConfig } from "./VodPackagingConfig";


export class VodPackagingConfiguration extends $dara.Model {
  configurationName?: string;
  createTime?: string;
  description?: string;
  groupName?: string;
  packageConfig?: VodPackagingConfig;
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      configurationName: 'ConfigurationName',
      createTime: 'CreateTime',
      description: 'Description',
      groupName: 'GroupName',
      packageConfig: 'PackageConfig',
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configurationName: 'string',
      createTime: 'string',
      description: 'string',
      groupName: 'string',
      packageConfig: VodPackagingConfig,
      protocol: 'string',
    };
  }

  validate() {
    if(this.packageConfig && typeof (this.packageConfig as any).validate === 'function') {
      (this.packageConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

