// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAckClusterConnectorRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ACK cluster connector. You can obtain the value from:
   * - [DescribeAckClusterConnectors](~~DescribeAckClusterConnectors~~): Lists ACK cluster connectors.
   * 
   * This parameter is required.
   * 
   * @example
   * ac-7c1bad6c3cc84c33baab
   */
  connectorId?: string;
  /**
   * @remarks
   * The language in which the health status error reason of the ACK cluster connector is displayed.
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

