// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccessInstanceRegionListRequest extends $dara.Model {
  /**
   * @example
   * ready
   */
  accessInstanceStatus?: string;
  /**
   * @example
   * AckClusterConnector
   */
  accessInstanceType?: string;
  static names(): { [key: string]: string } {
    return {
      accessInstanceStatus: 'AccessInstanceStatus',
      accessInstanceType: 'AccessInstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessInstanceStatus: 'string',
      accessInstanceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

