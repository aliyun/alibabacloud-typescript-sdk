// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MachineGroup extends $dara.Model {
  creatorID?: string;
  /**
   * @example
   * 470.199.02
   */
  defaultDriver?: string;
  diskCapacity?: number;
  diskPL?: string;
  ecsCount?: number;
  ecsSpec?: string;
  gmtCreatedTime?: string;
  gmtExpiredTime?: string;
  gmtModifiedTime?: string;
  gmtStartedTime?: string;
  /**
   * @example
   * mg1
   */
  machineGroupID?: string;
  orderInstanceId?: string;
  paymentDuration?: string;
  paymentDurationUnit?: string;
  paymentType?: string;
  reasonCode?: string;
  reasonMessage?: string;
  resourceGroupID?: string;
  status?: string;
  supportedDrivers?: string[];
  static names(): { [key: string]: string } {
    return {
      creatorID: 'CreatorID',
      defaultDriver: 'DefaultDriver',
      diskCapacity: 'DiskCapacity',
      diskPL: 'DiskPL',
      ecsCount: 'EcsCount',
      ecsSpec: 'EcsSpec',
      gmtCreatedTime: 'GmtCreatedTime',
      gmtExpiredTime: 'GmtExpiredTime',
      gmtModifiedTime: 'GmtModifiedTime',
      gmtStartedTime: 'GmtStartedTime',
      machineGroupID: 'MachineGroupID',
      orderInstanceId: 'OrderInstanceId',
      paymentDuration: 'PaymentDuration',
      paymentDurationUnit: 'PaymentDurationUnit',
      paymentType: 'PaymentType',
      reasonCode: 'ReasonCode',
      reasonMessage: 'ReasonMessage',
      resourceGroupID: 'ResourceGroupID',
      status: 'Status',
      supportedDrivers: 'SupportedDrivers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creatorID: 'string',
      defaultDriver: 'string',
      diskCapacity: 'number',
      diskPL: 'string',
      ecsCount: 'number',
      ecsSpec: 'string',
      gmtCreatedTime: 'string',
      gmtExpiredTime: 'string',
      gmtModifiedTime: 'string',
      gmtStartedTime: 'string',
      machineGroupID: 'string',
      orderInstanceId: 'string',
      paymentDuration: 'string',
      paymentDurationUnit: 'string',
      paymentType: 'string',
      reasonCode: 'string',
      reasonMessage: 'string',
      resourceGroupID: 'string',
      status: 'string',
      supportedDrivers: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.supportedDrivers)) {
      $dara.Model.validateArray(this.supportedDrivers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

