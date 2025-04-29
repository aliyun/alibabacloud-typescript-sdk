// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIntranetDomainRequest extends $dara.Model {
  /**
   * @remarks
   * The custom domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * 927d50c0f2e54b359919923d908bb015
   */
  groupId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

