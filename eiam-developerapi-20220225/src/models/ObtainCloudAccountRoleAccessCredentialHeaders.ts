// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ObtainCloudAccountRoleAccessCredentialHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @remarks
   * The authentication information. Format: Bearer ${access_token}. 
   * > Enter the Access Token issued by IDaaS.
   * 
   * This parameter is required.
   * 
   * @example
   * Bearer xxxxxx
   */
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

