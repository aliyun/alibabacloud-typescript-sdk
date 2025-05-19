// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListInstanceResourcesResponseBodyResources } from "./ListInstanceResourcesResponseBodyResources";


export class ListInstanceResourcesResponseBody extends $dara.Model {
  /**
   * @example
   * 9763624B-5FBB-5E3A-9193-B1ADB554CEAE
   */
  requestId?: string;
  resources?: ListInstanceResourcesResponseBodyResources[];
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resources: 'Resources',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resources: { 'type': 'array', 'itemType': ListInstanceResourcesResponseBodyResources },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.resources)) {
      $dara.Model.validateArray(this.resources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

