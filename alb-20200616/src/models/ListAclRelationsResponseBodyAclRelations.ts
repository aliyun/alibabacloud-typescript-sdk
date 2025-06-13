// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAclRelationsResponseBodyAclRelationsRelatedListeners } from "./ListAclRelationsResponseBodyAclRelationsRelatedListeners";


export class ListAclRelationsResponseBodyAclRelations extends $dara.Model {
  /**
   * @remarks
   * ACL ID
   * 
   * @example
   * nacl-hp34s2h0xx1ht4nwo****
   */
  aclId?: string;
  /**
   * @remarks
   * The listeners that are associated with the ACL.
   */
  relatedListeners?: ListAclRelationsResponseBodyAclRelationsRelatedListeners[];
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      relatedListeners: 'RelatedListeners',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      relatedListeners: { 'type': 'array', 'itemType': ListAclRelationsResponseBodyAclRelationsRelatedListeners },
    };
  }

  validate() {
    if(Array.isArray(this.relatedListeners)) {
      $dara.Model.validateArray(this.relatedListeners);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

