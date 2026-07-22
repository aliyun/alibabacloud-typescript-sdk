// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccessInstanceRegionListRequest extends $dara.Model {
  /**
   * @remarks
   * The status of the synchronization node. Used to filter by status.
   * 
   * @example
   * ready
   */
  accessInstanceStatus?: string;
  /**
   * @remarks
   * The type of the synchronization node. Valid values:
   * 
   * - **PrivateDns**: Private DNS. This is the default value if this parameter is not specified.
   * 
   * - **AckClusterConnector**: ACK cluster connector.
   * 
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

