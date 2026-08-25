// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUserProvisioningConfigurationResponseBodyUserProvisioningConfiguration extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2022-11-28T03:55:42Z
   */
  createTime?: string;
  /**
   * @remarks
   * The default URL for a CloudSSO user who logs on to the Alibaba Cloud Management Console.
   * 
   * Default value: https://homenew.console.aliyun.com.
   * 
   * @example
   * https://homenew.console.aliyun.com
   */
  defaultLandingPage?: string;
  /**
   * @remarks
   * The ID of the resource directory.
   * 
   * @example
   * d-003qew84****
   */
  directoryId?: string;
  /**
   * @remarks
   * The duration of the logon session.
   * 
   * Unit: hours.
   * 
   * Valid values: 1 to 24.
   * 
   * Default value: 6.
   * 
   * @example
   * 6
   */
  sessionDuration?: number;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2022-11-28T03:55:42Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      defaultLandingPage: 'DefaultLandingPage',
      directoryId: 'DirectoryId',
      sessionDuration: 'SessionDuration',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      defaultLandingPage: 'string',
      directoryId: 'string',
      sessionDuration: 'number',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserProvisioningConfigurationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BBC2ED1D-FAC5-3DF8-B63C-992B85B08DD9
   */
  requestId?: string;
  /**
   * @remarks
   * The global configurations of the RAM user provisioning.
   */
  userProvisioningConfiguration?: UpdateUserProvisioningConfigurationResponseBodyUserProvisioningConfiguration;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userProvisioningConfiguration: 'UserProvisioningConfiguration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userProvisioningConfiguration: UpdateUserProvisioningConfigurationResponseBodyUserProvisioningConfiguration,
    };
  }

  validate() {
    if(this.userProvisioningConfiguration && typeof (this.userProvisioningConfiguration as any).validate === 'function') {
      (this.userProvisioningConfiguration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

