// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class ApplyCoordinationWithCodeResponseBodyData extends $dara.Model {
  /**
   * @example
   * co-0ad0f3p4n2******
   */
  coId?: string;
  /**
   * @example
   * COORDINATING
   */
  coordinateStatus?: string;
  /**
   * @example
   * DQpbRGVza3RvcF0NCkZvcmNlVGxzVHlwZT0xDQ******
   */
  coordinateTicket?: string;
  /**
   * @example
   * 1126819517******
   */
  coordinatorAliUid?: number;
  /**
   * @example
   * bob
   */
  coordinatorUserId?: string;
  /**
   * @example
   * 1126819517******
   */
  ownerAliUid?: number;
  /**
   * @example
   * alice
   */
  ownerUserId?: string;
  /**
   * @example
   * ecd-3vv4mf8zxg******
   */
  resourceId?: string;
  /**
   * @example
   * demo-desktop
   */
  resourceName?: string;
  /**
   * @example
   * cn-hangzhou
   */
  resourceRegionId?: string;
  /**
   * @example
   * CloudDesktop
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      coId: 'CoId',
      coordinateStatus: 'CoordinateStatus',
      coordinateTicket: 'CoordinateTicket',
      coordinatorAliUid: 'CoordinatorAliUid',
      coordinatorUserId: 'CoordinatorUserId',
      ownerAliUid: 'OwnerAliUid',
      ownerUserId: 'OwnerUserId',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      resourceRegionId: 'ResourceRegionId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coId: 'string',
      coordinateStatus: 'string',
      coordinateTicket: 'string',
      coordinatorAliUid: 'number',
      coordinatorUserId: 'string',
      ownerAliUid: 'number',
      ownerUserId: 'string',
      resourceId: 'string',
      resourceName: 'string',
      resourceRegionId: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyCoordinationWithCodeResponseBody extends $dara.Model {
  data?: ApplyCoordinationWithCodeResponseBodyData;
  /**
   * @example
   * AD2D0761-1FE5-549D-B169******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ApplyCoordinationWithCodeResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

