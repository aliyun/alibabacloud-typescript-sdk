// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAclRelationsResponseBodyAclRelations } from "./ListAclRelationsResponseBodyAclRelations";


export class ListAclRelationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The relations between the specified ACL and the listeners.
   */
  aclRelations?: ListAclRelationsResponseBodyAclRelations[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 593B0448-D13E-4C56-AC0D-FDF0FDE0E9A3
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      aclRelations: 'AclRelations',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclRelations: { 'type': 'array', 'itemType': ListAclRelationsResponseBodyAclRelations },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.aclRelations)) {
      $dara.Model.validateArray(this.aclRelations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

