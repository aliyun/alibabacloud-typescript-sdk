// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeregisterDelegatedAdministratorRequest extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID of the member in the resource directory.
   * 
   * This parameter is required.
   * 
   * @example
   * 181761095690****
   */
  accountId?: string;
  /**
   * @remarks
   * The identifier of the trusted service.
   * 
   * This parameter is required.
   * 
   * @example
   * cloudfw.aliyuncs.com
   */
  servicePrincipal?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      servicePrincipal: 'ServicePrincipal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      servicePrincipal: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

