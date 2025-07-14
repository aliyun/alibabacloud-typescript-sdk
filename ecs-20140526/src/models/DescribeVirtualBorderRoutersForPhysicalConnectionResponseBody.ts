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

export class DescribeVirtualBorderRoutersForPhysicalConnectionResponseBodyVirtualBorderRouterForPhysicalConnectionSet extends $dara.Model {
  virtualBorderRouterForPhysicalConnectionType?: DescribeVirtualBorderRoutersForPhysicalConnectionResponseBodyVirtualBorderRouterForPhysicalConnectionSetVirtualBorderRouterForPhysicalConnectionType[];
  static names(): { [key: string]: string } {
    return {
      virtualBorderRouterForPhysicalConnectionType: 'VirtualBorderRouterForPhysicalConnectionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      virtualBorderRouterForPhysicalConnectionType: { 'type': 'array', 'itemType': DescribeVirtualBorderRoutersForPhysicalConnectionResponseBodyVirtualBorderRouterForPhysicalConnectionSetVirtualBorderRouterForPhysicalConnectionType },
    };
  }

  validate() {
    if(Array.isArray(this.virtualBorderRouterForPhysicalConnectionType)) {
      $dara.Model.validateArray(this.virtualBorderRouterForPhysicalConnectionType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVirtualBorderRoutersForPhysicalConnectionResponseBody extends $dara.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  virtualBorderRouterForPhysicalConnectionSet?: DescribeVirtualBorderRoutersForPhysicalConnectionResponseBodyVirtualBorderRouterForPhysicalConnectionSet;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      virtualBorderRouterForPhysicalConnectionSet: 'VirtualBorderRouterForPhysicalConnectionSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      virtualBorderRouterForPhysicalConnectionSet: DescribeVirtualBorderRoutersForPhysicalConnectionResponseBodyVirtualBorderRouterForPhysicalConnectionSet,
    };
  }

  validate() {
    if(this.virtualBorderRouterForPhysicalConnectionSet && typeof (this.virtualBorderRouterForPhysicalConnectionSet as any).validate === 'function') {
      (this.virtualBorderRouterForPhysicalConnectionSet as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

