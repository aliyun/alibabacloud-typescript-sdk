// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListResourceRelationsResponseBodyResourceRelations } from "./ListResourceRelationsResponseBodyResourceRelations";


export class ListResourceRelationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6525F8DE-5A8B-5AD3-A241-BBF5A259E5B2
   */
  requestId?: string;
  /**
   * @remarks
   * The result of the relationship.
   */
  resourceRelations?: ListResourceRelationsResponseBodyResourceRelations;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceRelations: 'ResourceRelations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceRelations: ListResourceRelationsResponseBodyResourceRelations,
    };
  }

  validate() {
    if(this.resourceRelations && typeof (this.resourceRelations as any).validate === 'function') {
      (this.resourceRelations as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

