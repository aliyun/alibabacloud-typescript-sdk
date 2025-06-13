// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetListenerAttributeResponseBodyAclConfigAclRelations extends $dara.Model {
  /**
   * @remarks
   * The ID of the ACL that is associated with the listener.
   * 
   * @example
   * acl-doc****
   */
  aclId?: string;
  /**
   * @remarks
   * Indicates whether the ACL is associated with the listener. Valid values:
   * 
   * *   **Associating**
   * *   **Associated**
   * *   **Dissociating**
   * 
   * @example
   * Associating
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

