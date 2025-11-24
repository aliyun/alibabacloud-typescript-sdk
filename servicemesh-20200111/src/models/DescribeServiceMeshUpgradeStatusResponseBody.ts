// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpgradeDetailGatewayStatusRecordValue } from "./UpgradeDetailGatewayStatusRecordValue";


export class DescribeServiceMeshUpgradeStatusResponseBodyUpgradeDetail extends $dara.Model {
  /**
   * @remarks
   * The number of ingress gateways that are upgraded.
   * 
   * @example
   * 1
   */
  finishedGatewaysNum?: number;
  /**
   * @remarks
   * The information about the status of the ingress gateways.
   */
  gatewayStatusRecord?: { [key: string]: UpgradeDetailGatewayStatusRecordValue };
  /**
   * @remarks
   * The status of the ASM instance. Valid values:
   * 
   * *   running: The instance is running.
   * *   `upgrading`: The instance is being upgraded.
   * *   `upgrading_failed`: The upgrade of the instance fails.
   * 
   * @example
   * running
   */
  meshStatus?: string;
  /**
   * @remarks
   * The total number of ingress gateways in the ASM instance.
   * 
   * @example
   * 2
   */
  totalGatewaysNum?: number;
  static names(): { [key: string]: string } {
    return {
      finishedGatewaysNum: 'FinishedGatewaysNum',
      gatewayStatusRecord: 'GatewayStatusRecord',
      meshStatus: 'MeshStatus',
      totalGatewaysNum: 'TotalGatewaysNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finishedGatewaysNum: 'number',
      gatewayStatusRecord: { 'type': 'map', 'keyType': 'string', 'valueType': UpgradeDetailGatewayStatusRecordValue },
      meshStatus: 'string',
      totalGatewaysNum: 'number',
    };
  }

  validate() {
    if(this.gatewayStatusRecord) {
      $dara.Model.validateMap(this.gatewayStatusRecord);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshUpgradeStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 11fd0027-c27e-41bb-a565-75583054****
   */
  requestId?: string;
  /**
   * @remarks
   * The upgrade results.
   */
  upgradeDetail?: DescribeServiceMeshUpgradeStatusResponseBodyUpgradeDetail;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      upgradeDetail: 'UpgradeDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      upgradeDetail: DescribeServiceMeshUpgradeStatusResponseBodyUpgradeDetail,
    };
  }

  validate() {
    if(this.upgradeDetail && typeof (this.upgradeDetail as any).validate === 'function') {
      (this.upgradeDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

