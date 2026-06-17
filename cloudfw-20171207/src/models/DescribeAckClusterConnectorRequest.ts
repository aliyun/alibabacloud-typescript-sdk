// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAckClusterConnectorRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ACK cluster connector. You can obtain the ID by calling the [DescribeAckClusterConnectors](~~DescribeAckClusterConnectors~~) operation to query a list of ACK cluster connectors.
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
   * The language of the error messages that are returned for the health check status of the ACK cluster connector.
   * 
   * @example
   * zh
   */
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      connectorId: 'ConnectorId',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectorId: 'string',
      lang: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

