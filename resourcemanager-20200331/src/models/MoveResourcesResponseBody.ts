// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MoveResourcesResponseBodyResponses extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * > This parameter is returned only when the resource transfer fails.
   * 
   * @example
   * NoPermission
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * > This parameter is returned only when the resource transfer fails.
   * 
   * @example
   * No permission
   */
  errorMsg?: string;
  /**
   * @remarks
   * The region ID of the resource.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C00B89D3-3247-11DE-95D8-A7C01FB0AB4F
   */
  requestId?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * i-23v38****
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * instance
   */
  resourceType?: string;
  /**
   * @remarks
   * The cloud service code.
   * 
   * @example
   * ecs
   */
  service?: string;
  /**
   * @remarks
   * The status. Valid values:
   * 
   * - SUCCESS: Succeeded.
   * - FAIL: Failed.
   * 
   * @example
   * FAIL
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      regionId: 'RegionId',
      requestId: 'RequestId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      service: 'Service',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMsg: 'string',
      regionId: 'string',
      requestId: 'string',
      resourceId: 'string',
      resourceType: 'string',
      service: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C00B89D3-3247-11DE-95D8-A7C01FB0AB4F
   */
  requestId?: string;
  /**
   * @remarks
   * The response results.
   */
  responses?: MoveResourcesResponseBodyResponses[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      responses: 'Responses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      responses: { 'type': 'array', 'itemType': MoveResourcesResponseBodyResponses },
    };
  }

  validate() {
    if(Array.isArray(this.responses)) {
      $dara.Model.validateArray(this.responses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

