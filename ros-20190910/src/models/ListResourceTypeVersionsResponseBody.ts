// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListResourceTypeVersionsResponseBodyResourceTypeVersions } from "./ListResourceTypeVersionsResponseBodyResourceTypeVersions";


export class ListResourceTypeVersionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B288A0BE-D927-4888-B0F7-B35EF84B6E6F
   */
  requestId?: string;
  /**
   * @remarks
   * The versions of the resource types.
   */
  resourceTypeVersions?: ListResourceTypeVersionsResponseBodyResourceTypeVersions[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceTypeVersions: 'ResourceTypeVersions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceTypeVersions: { 'type': 'array', 'itemType': ListResourceTypeVersionsResponseBodyResourceTypeVersions },
    };
  }

  validate() {
    if(Array.isArray(this.resourceTypeVersions)) {
      $dara.Model.validateArray(this.resourceTypeVersions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

