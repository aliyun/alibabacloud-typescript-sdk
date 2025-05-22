// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListResourceTypesResponseBodyResourceTypeSummaries } from "./ListResourceTypesResponseBodyResourceTypeSummaries";


export class ListResourceTypesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * EA00860C-ECAF-5253-A1F9-8198695A7157
   */
  requestId?: string;
  /**
   * @remarks
   * The resource type summaries.
   */
  resourceTypeSummaries?: ListResourceTypesResponseBodyResourceTypeSummaries[];
  /**
   * @remarks
   * The array of resource types.
   */
  resourceTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceTypeSummaries: 'ResourceTypeSummaries',
      resourceTypes: 'ResourceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceTypeSummaries: { 'type': 'array', 'itemType': ListResourceTypesResponseBodyResourceTypeSummaries },
      resourceTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.resourceTypeSummaries)) {
      $dara.Model.validateArray(this.resourceTypeSummaries);
    }
    if(Array.isArray(this.resourceTypes)) {
      $dara.Model.validateArray(this.resourceTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

