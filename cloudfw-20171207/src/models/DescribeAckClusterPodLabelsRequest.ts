// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAckClusterPodLabelsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ACK cluster connector. You can obtain the ID by calling the following operation:
   * 
   * - [DescribeAckClusterConnectors](~~DescribeAckClusterConnectors~~): queries a list of ACK cluster connectors.
   * 
   * This parameter is required.
   * 
   * @example
   * ac-7c1bad6c3cc84c33baab
   */
  connectorId?: string;
  static names(): { [key: string]: string } {
    return {
      connectorId: 'ConnectorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectorId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

