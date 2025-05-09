// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceMemberAttributesRequestMembers extends $dara.Model {
  /**
   * @remarks
   * The remarks of the member in Cloud Firewall.
   * 
   * This parameter is required.
   * 
   * @example
   * renewal
   */
  memberDesc?: string;
  /**
   * @remarks
   * The UID of the member in Cloud Firewall.
   * 
   * This parameter is required.
   * 
   * @example
   * 123412341234****
   */
  memberUid?: number;
  static names(): { [key: string]: string } {
    return {
      memberDesc: 'MemberDesc',
      memberUid: 'MemberUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberDesc: 'string',
      memberUid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

