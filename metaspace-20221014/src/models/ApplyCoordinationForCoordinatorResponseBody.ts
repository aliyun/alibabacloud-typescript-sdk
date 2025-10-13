// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyCoordinationForCoordinatorResponseBodyCoordinateFlowModels extends $dara.Model {
  /**
   * @example
   * co-9kt75fon9pj****
   */
  coId?: string;
  /**
   * @example
   * PENDING
   */
  coordinateStatus?: string;
  /**
   * @example
   * W0Rlc2t0b3BdDQpHV1Rva2VuPTAwT1A1bHp1RUlEdU00T0IzemdiZ****
   */
  coordinateTicket?: string;
  /**
   * @example
   * 10419178654***
   */
  coordinatorUserId?: string;
  /**
   * @example
   * alice
   */
  ownerUserId?: string;
  /**
   * @example
   * ai-ij4a6kd4bn2****
   */
  resourceId?: string;
  /**
   * @example
   * test-resource
   */
  resourceName?: string;
  static names(): { [key: string]: string } {
    return {
      coId: 'CoId',
      coordinateStatus: 'CoordinateStatus',
      coordinateTicket: 'CoordinateTicket',
      coordinatorUserId: 'CoordinatorUserId',
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
      coordinatorUserId: 'string',
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

export class ApplyCoordinationForCoordinatorResponseBody extends $dara.Model {
  coordinateFlowModels?: ApplyCoordinationForCoordinatorResponseBodyCoordinateFlowModels[];
  /**
   * @example
   * AD2D0761-1FE5-549D-B169******
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
      coordinateFlowModels: { 'type': 'array', 'itemType': ApplyCoordinationForCoordinatorResponseBodyCoordinateFlowModels },
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

