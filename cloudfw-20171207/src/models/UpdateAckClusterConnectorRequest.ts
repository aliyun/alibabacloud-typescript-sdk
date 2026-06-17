// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAckClusterConnectorRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ACK cluster connector. You can call the [DescribeAckClusterConnectors](~~DescribeAckClusterConnectors~~) operation to query the list of ACK cluster connectors.
   * 
   * - [DescribeAckClusterConnectors](~~DescribeAckClusterConnectors~~): Queries a list of ACK cluster connectors.
   * 
   * This parameter is required.
   * 
   * @example
   * ac-7c1bad6c3cc84c33baab
   */
  connectorId?: string;
  /**
   * @remarks
   * The name of the ACK cluster connector. The name must be 1 to 64 characters in length and can contain Chinese characters, letters, digits, periods (.), underscores (_), and hyphens (-).
   * 
   * @example
   * ack-cluster-connector-name
   */
  connectorName?: string;
  /**
   * @remarks
   * The synchronization interval for the ACK cluster connector. Valid values: 2 to 60. Unit: seconds.
   * 
   * @example
   * 30
   */
  ttl?: string;
  static names(): { [key: string]: string } {
    return {
      connectorId: 'ConnectorId',
      connectorName: 'ConnectorName',
      ttl: 'Ttl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectorId: 'string',
      connectorName: 'string',
      ttl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

