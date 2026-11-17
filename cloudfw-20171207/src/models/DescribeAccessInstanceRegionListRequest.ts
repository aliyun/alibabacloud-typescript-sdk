// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccessInstanceRegionListRequest extends $dara.Model {
  /**
   * @remarks
   * The status of the synchronization node. This parameter is used to filter by status.
   * 
   * > Currently, only the "created" status is supported for filtering. Specifying other values (such as "ready") will cause the request to fail.
   * 
   * @example
   * created
   */
  accessInstanceStatus?: string;
  /**
   * @remarks
   * The type of the synchronization node. Valid values:
   * 
   * - **PrivateDns**: Private DNS. If this parameter is not specified, the default value is PrivateDns.
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

