// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetApplicationResourceServerIdentifierRequest extends $dara.Model {
  /**
   * @remarks
   * IDaaS的应用资源ID。
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @example
   * client-token-example
   */
  clientToken?: string;
  /**
   * @remarks
   * IDaaS EIAM实例的ID。
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * ResourceServer唯一标识，对应ResourceServer受众
   * 
   * This parameter is required.
   * 
   * @example
   * http://gateway.com
   */
  resourceServerIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      resourceServerIdentifier: 'ResourceServerIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      clientToken: 'string',
      instanceId: 'string',
      resourceServerIdentifier: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

