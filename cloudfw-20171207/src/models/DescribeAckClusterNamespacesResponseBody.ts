// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAckClusterNamespacesResponseBody extends $dara.Model {
  ackNamespaces?: string[];
  /**
   * @example
   * 133173B9-8010-5DF5-8B93-********
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ackNamespaces: 'AckNamespaces',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ackNamespaces: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ackNamespaces)) {
      $dara.Model.validateArray(this.ackNamespaces);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

