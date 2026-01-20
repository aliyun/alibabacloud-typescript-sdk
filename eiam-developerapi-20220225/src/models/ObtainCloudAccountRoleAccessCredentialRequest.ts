// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ObtainCloudAccountRoleAccessCredentialRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * acs:ram::xxx:role/role-test
   */
  cloudAccountRoleExternalId?: string;
  static names(): { [key: string]: string } {
    return {
      cloudAccountRoleExternalId: 'cloudAccountRoleExternalId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudAccountRoleExternalId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

