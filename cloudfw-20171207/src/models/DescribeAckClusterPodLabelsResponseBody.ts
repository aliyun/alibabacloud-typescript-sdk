// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAckClusterPodLabelsResponseBodyAckLabels extends $dara.Model {
  /**
   * @example
   * app
   */
  key?: string;
  /**
   * @example
   * storage-operator
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAckClusterPodLabelsResponseBody extends $dara.Model {
  ackLabels?: DescribeAckClusterPodLabelsResponseBodyAckLabels[];
  /**
   * @example
   * 6169C0A4-B91A-5D48-AE4D-B9432D15****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ackLabels: 'AckLabels',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ackLabels: { 'type': 'array', 'itemType': DescribeAckClusterPodLabelsResponseBodyAckLabels },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ackLabels)) {
      $dara.Model.validateArray(this.ackLabels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

