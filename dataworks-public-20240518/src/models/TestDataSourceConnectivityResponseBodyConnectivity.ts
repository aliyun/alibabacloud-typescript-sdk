// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TestDataSourceConnectivityResponseBodyConnectivityDetailLogs } from "./TestDataSourceConnectivityResponseBodyConnectivityDetailLogs";


export class TestDataSourceConnectivityResponseBodyConnectivity extends $dara.Model {
  /**
   * @remarks
   * The error message returned if the connectivity test fails. No such a message is returned if the connectivity test is successful.
   */
  connectMessage?: string;
  /**
   * @remarks
   * The result of the connectivity test. Valid values: Connectable: The network can be connected. ConfigError: The network can be connected, but the configurations are incorrect. Unreachable: The network cannot be connected. Unsupport: An error is reported due to other causes. For example, the desired resource group is being initialized.
   * 
   * @example
   * Connectable
   */
  connectState?: string;
  /**
   * @remarks
   * The detailed logs of each step in the connectivity test.
   */
  detailLogs?: TestDataSourceConnectivityResponseBodyConnectivityDetailLogs[];
  static names(): { [key: string]: string } {
    return {
      connectMessage: 'ConnectMessage',
      connectState: 'ConnectState',
      detailLogs: 'DetailLogs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectMessage: 'string',
      connectState: 'string',
      detailLogs: { 'type': 'array', 'itemType': TestDataSourceConnectivityResponseBodyConnectivityDetailLogs },
    };
  }

  validate() {
    if(Array.isArray(this.detailLogs)) {
      $dara.Model.validateArray(this.detailLogs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

