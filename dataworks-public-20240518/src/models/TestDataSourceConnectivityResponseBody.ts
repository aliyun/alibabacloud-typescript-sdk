// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TestDataSourceConnectivityResponseBodyConnectivityDetailLogs extends $dara.Model {
  /**
   * @remarks
   * The code of the test item.
   * 
   * @example
   * validate_input_parameters
   */
  code?: string;
  /**
   * @remarks
   * The end time of a step.
   * 
   * @example
   * 1730217604002
   */
  endTime?: number;
  /**
   * @remarks
   * The name of the step.
   */
  message?: string;
  /**
   * @remarks
   * The start time of a step.
   * 
   * @example
   * 1730217600001
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      endTime: 'EndTime',
      message: 'Message',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      endTime: 'number',
      message: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class TestDataSourceConnectivityResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the connectivity test.
   */
  connectivity?: TestDataSourceConnectivityResponseBodyConnectivity;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4CDF7B72-020B-542A-8465-21CFFA81****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      connectivity: 'Connectivity',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectivity: TestDataSourceConnectivityResponseBodyConnectivity,
      requestId: 'string',
    };
  }

  validate() {
    if(this.connectivity && typeof (this.connectivity as any).validate === 'function') {
      (this.connectivity as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

