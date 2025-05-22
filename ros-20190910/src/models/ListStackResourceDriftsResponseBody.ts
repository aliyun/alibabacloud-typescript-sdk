// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListStackResourceDriftsResponseBodyResourceDrifts } from "./ListStackResourceDriftsResponseBodyResourceDrifts";


export class ListStackResourceDriftsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The query token returned in this call.
   * 
   * @example
   * AAAAAdDWBF2****w==
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B288A0BE-D927-4888-B0F7-B35EF84B6E6F
   */
  requestId?: string;
  /**
   * @remarks
   * The resource drifts.
   */
  resourceDrifts?: ListStackResourceDriftsResponseBodyResourceDrifts[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      resourceDrifts: 'ResourceDrifts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      resourceDrifts: { 'type': 'array', 'itemType': ListStackResourceDriftsResponseBodyResourceDrifts },
    };
  }

  validate() {
    if(Array.isArray(this.resourceDrifts)) {
      $dara.Model.validateArray(this.resourceDrifts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

