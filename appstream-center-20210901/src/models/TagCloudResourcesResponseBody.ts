// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TagCloudResourcesResponseBodyFailedResources } from "./TagCloudResourcesResponseBodyFailedResources";


export class TagCloudResourcesResponseBody extends $dara.Model {
  failedResources?: TagCloudResourcesResponseBodyFailedResources[];
  /**
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
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
      failedResources: { 'type': 'array', 'itemType': TagCloudResourcesResponseBodyFailedResources },
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

