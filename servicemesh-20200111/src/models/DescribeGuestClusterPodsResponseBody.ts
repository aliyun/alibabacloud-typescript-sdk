// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGuestClusterPodsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of the names of the queried pods.
   */
  podList?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EDDC0D86-2FC3-56FB-9213-96EB0A3523F1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      podList: 'PodList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      podList: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.podList)) {
      $dara.Model.validateArray(this.podList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

