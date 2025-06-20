// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListResourceTypesResponseBodyResourceTypes } from "./ListResourceTypesResponseBodyResourceTypes";


export class ListResourceTypesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E5556E4C-479A-5BBB-B325-F07563E7E917
   */
  requestId?: string;
  /**
   * @remarks
   * The resource types.
   */
  resourceTypes?: ListResourceTypesResponseBodyResourceTypes[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceTypes: 'ResourceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceTypes: { 'type': 'array', 'itemType': ListResourceTypesResponseBodyResourceTypes },
    };
  }

  validate() {
    if(Array.isArray(this.resourceTypes)) {
      $dara.Model.validateArray(this.resourceTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

