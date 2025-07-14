// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyCoordinationForMonitoringResponseBodyCoordinateFlowModels extends $dara.Model {
  /**
   * @remarks
   * The ID of the stream collaboration.
   * 
   * @example
   * co-0sot77uale3****
   */
  coId?: string;
  /**
   * @remarks
   * The current status of the collaboration task.
   * 
   * Valid values:
   * 
   * *   COORDINATING: The collaboration task is being executed.
   * 
   * *   TERMINATING: The collaboration task is being terminated.
   * 
   * *   TERMINATED: The collaboration task is terminated.
   * 
   * *   PENDING: The collaboration task is pending to be executed.
   * 
   * @example
   * PENDING
   */
  coordinateStatus?: string;
  /**
   * @remarks
   * The ticket that is used to establish the Adaptive Streaming Protocol (ASP)-based connection.
   * 
   * @example
   * 1VDQ0VTUw0KW0Rlc2t0b3BdDQpHV1Rva2VuPTAwTzgwL3liS25zUEVGdkF6eU1Pc1ExeHZWdmk4VEE3NFJvU1V1d0dPYm1BNkNJWklDMHVNQklWcjU2NS80S0ZQekQ4aGFTR0ZHelZqMTFGbkRpWWgvUFF1Zm1xSXNGdFRFNFRWMExJNit3TkU0L2RMb04wNXBBSE5Tc3M4dWFXY3lwWE****
   */
  coordinateTicket?: string;
  /**
   * @remarks
   * The type of the initiator.
   * 
   * Valid values:
   * 
   * *   ADMIN_INITIATE_FORCE: The administrator forcibly initiates the collaboration request.
   * 
   * *   ADMIN_INITIATE: The administrator initiates the collaboration request.
   * 
   * *   COORDINATOR_INITIATE_FORCE: The coordinator forcibly initiates the collaboration request.
   * 
   * @example
   * COORDINATOR_INITIATE_FORCE
   */
  initiatorType?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account of the end user.
   * 
   * @example
   * alice
   */
  ownerUserId?: string;
  /**
   * @remarks
   * The ID of the cloud desktop.
   * 
   * @example
   * ecd-96vi03f9emqnl****
   */
  resourceId?: string;
  /**
   * @remarks
   * The name of the cloud desktop.
   * 
   * @example
   * TestDesktop
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
   * The list of stream collaboration models.
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

