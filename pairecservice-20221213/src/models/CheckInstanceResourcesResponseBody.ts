// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CheckInstanceResourcesResponseBodyResources } from "./CheckInstanceResourcesResponseBodyResources";


export class CheckInstanceResourcesResponseBody extends $dara.Model {
  /**
   * @example
   * 9763624B-5FBB-5E3A-9193-B1ADB554CEAE
   */
  requestId?: string;
  resources?: CheckInstanceResourcesResponseBodyResources[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resources: { 'type': 'array', 'itemType': CheckInstanceResourcesResponseBodyResources },
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

