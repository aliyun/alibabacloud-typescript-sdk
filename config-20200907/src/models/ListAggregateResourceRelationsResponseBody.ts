// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAggregateResourceRelationsResponseBodyResourceRelations } from "./ListAggregateResourceRelationsResponseBodyResourceRelations";


export class ListAggregateResourceRelationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7A25F9DE-4C8B-5AD3-A241-FFF5A259E5A1
   */
  requestId?: string;
  /**
   * @remarks
   * The result of the relationship.
   */
  resourceRelations?: ListAggregateResourceRelationsResponseBodyResourceRelations;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceRelations: 'ResourceRelations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceRelations: ListAggregateResourceRelationsResponseBodyResourceRelations,
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

