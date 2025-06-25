// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UntagCloudResourcesResponseBodyFailedResources } from "./UntagCloudResourcesResponseBodyFailedResources";


export class UntagCloudResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cloud resources whose tags failed to be removed and the corresponding tags.
   */
  failedResources?: UntagCloudResourcesResponseBodyFailedResources[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E25FC620-6B6F-12D2-A992-AD8727DC****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      failedResources: 'FailedResources',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedResources: { 'type': 'array', 'itemType': UntagCloudResourcesResponseBodyFailedResources },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.failedResources)) {
      $dara.Model.validateArray(this.failedResources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

