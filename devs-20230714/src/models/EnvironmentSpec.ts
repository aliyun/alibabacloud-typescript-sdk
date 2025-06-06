// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EnvironmentStagedConfigs } from "./EnvironmentStagedConfigs";


export class EnvironmentSpec extends $dara.Model {
  /**
   * @example
   * acs:ram::*******:role/aliyundevsdefaultrole
   */
  roleArn?: string;
  stagedConfigs?: EnvironmentStagedConfigs;
  /**
   * @example
   * Testing
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      roleArn: 'roleArn',
      stagedConfigs: 'stagedConfigs',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleArn: 'string',
      stagedConfigs: EnvironmentStagedConfigs,
      type: 'string',
    };
  }

  validate() {
    if(this.stagedConfigs && typeof (this.stagedConfigs as any).validate === 'function') {
      (this.stagedConfigs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

