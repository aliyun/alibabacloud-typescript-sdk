// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVirtualBorderRoutersForPhysicalConnectionResponseBodyVirtualBorderRouterForPhysicalConnectionSetVirtualBorderRouterForPhysicalConnectionType extends $dara.Model {
  activationTime?: string;
  circuitCode?: string;
  creationTime?: string;
  recoveryTime?: string;
  terminationTime?: string;
  vbrId?: string;
  vbrOwnerUid?: number;
  vlanId?: number;
  static names(): { [key: string]: string } {
    return {
      activationTime: 'ActivationTime',
      circuitCode: 'CircuitCode',
      creationTime: 'CreationTime',
      recoveryTime: 'RecoveryTime',
      terminationTime: 'TerminationTime',
      vbrId: 'VbrId',
      vbrOwnerUid: 'VbrOwnerUid',
      vlanId: 'VlanId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activationTime: 'string',
      circuitCode: 'string',
      creationTime: 'string',
      recoveryTime: 'string',
      terminationTime: 'string',
      vbrId: 'string',
      vbrOwnerUid: 'number',
      vlanId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

