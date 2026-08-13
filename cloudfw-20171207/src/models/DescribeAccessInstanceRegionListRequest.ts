// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccessInstanceRegionListRequest extends $dara.Model {
  /**
   * @remarks
   * The sync node status. Used to filter by status.
   * 
   * > Currently, only the "created" status is supported for filtering. Passing other values (such as "ready") causes the request to fail.
   * 
   * @example
   * created
   */
  accessInstanceStatus?: string;
  /**
   * @remarks
   * The sync node type. Valid values:
   * 
   * - **PrivateDns**: Private DNS (default value if not specified).
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

