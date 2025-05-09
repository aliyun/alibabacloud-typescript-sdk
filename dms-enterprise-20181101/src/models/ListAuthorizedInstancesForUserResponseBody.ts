// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAuthorizedInstancesForUserResponseBodyInstances } from "./ListAuthorizedInstancesForUserResponseBodyInstances";


export class ListAuthorizedInstancesForUserResponseBody extends $dara.Model {
  instances?: ListAuthorizedInstancesForUserResponseBodyInstances[];
  /**
   * @example
   * B7DB89CC-017D-5503-8953-38FFE241A618
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': ListAuthorizedInstancesForUserResponseBodyInstances },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

