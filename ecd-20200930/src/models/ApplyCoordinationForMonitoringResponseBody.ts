// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyCoordinationForMonitoringResponseBodyCoordinateFlowModels extends $dara.Model {
  /**
   * @remarks
   * The coordination flow ID.
   * 
   * @example
   * co-0sot77uale3****
   */
  coId?: string;
  /**
   * @remarks
   * The current coordination status.
   * [_single.resp.200.props.CoordinateFlowModels.items.CoordinateStatus.enum.COORDINATING  ]coordinating
   * [_single.resp.200.props.CoordinateFlowModels.items.CoordinateStatus.enum.TERMINATING  ] terminating
   * [_single.resp.200.props.CoordinateFlowModels.items.CoordinateStatus.enum.TERMINATED ]terminated
   * [_single.resp.200.props.CoordinateFlowModels.items.CoordinateStatus.enum.PENDING ]pending acceptance
   * 
   * @example
   * PENDING
   */
  coordinateStatus?: string;
  /**
   * @remarks
   * The ticket used by ASP to establish a connection.
   * 
   * @example
   * 1VDQ0VTUw0KW0Rlc2t0b3BdDQpHV1Rva2VuPTAwTzgwL3liS25zUEVGdkF6eU1Pc1ExeHZWdmk4VEE3NFJvU1V1d0dPYm1BNkNJWklDMHVNQklWcjU2NS80S0ZQekQ4aGFTR0ZHelZqMTFGbkRpWWgvUFF1Zm1xSXNGdFRFNFRWMExJNit3TkU0L2RMb04wNXBBSE5Tc3M4dWFXY3lwWE****
   */
  coordinateTicket?: string;
  /**
   * @remarks
   * The initiator type.
   * 
   * @example
   * COORDINATOR_INITIATE_FORCE
   */
  initiatorType?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the user on the user side.
   * 
   * @example
   * alice
   */
  ownerUserId?: string;
  /**
   * @remarks
   * The cloud computer ID.
   * 
   * @example
   * ecd-96vi03f9emqnl****
   */
  resourceId?: string;
  /**
   * @remarks
   * The cloud computer name.
   * 
   * @example
   * DemoComputer
   */
  resourceName?: string;
  static names(): { [key: string]: string } {
    return {
      coId: 'CoId',
      coordinateStatus: 'CoordinateStatus',
      coordinateTicket: 'CoordinateTicket',
      initiatorType: 'InitiatorType',
      ownerUserId: 'OwnerUserId',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coId: 'string',
      coordinateStatus: 'string',
      coordinateTicket: 'string',
      initiatorType: 'string',
      ownerUserId: 'string',
      resourceId: 'string',
      resourceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyCoordinationForMonitoringResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of coordination flow data.
   */
  coordinateFlowModels?: ApplyCoordinationForMonitoringResponseBodyCoordinateFlowModels[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      coordinateFlowModels: 'CoordinateFlowModels',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coordinateFlowModels: { 'type': 'array', 'itemType': ApplyCoordinationForMonitoringResponseBodyCoordinateFlowModels },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.coordinateFlowModels)) {
      $dara.Model.validateArray(this.coordinateFlowModels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

