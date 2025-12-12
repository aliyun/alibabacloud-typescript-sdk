// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MoveResourcesResponseBodyResponses extends $dara.Model {
  /**
   * @remarks
   * The error code returned.
   * 
   * >  This parameter is returned if the resource failed to be moved.
   * 
   * @example
   * NoPermission
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned.
   * 
   * >  This parameter is returned if the resource failed to be moved.
   * 
   * @example
   * No permissions
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
   * The ID of the request.
   * 
   * @example
   * C00B89D3-3247-11DE-95D8-A7C01FB0AB4F
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource.
   * 
   * @example
   * vpc-bp1sig0mjktx5ewx1****
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the resource.
   * 
   * @example
   * vpc
   */
  resourceType?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud service.
   * 
   * @example
   * vpc
   */
  service?: string;
  /**
   * @remarks
   * The status of the move task. Valid values:
   * 
   * *   SUCCESS
   * *   FAIL
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
   * The ID of the request.
   * 
   * @example
   * C00B89D3-3247-11DE-95D8-A7C01FB0AB4F
   */
  requestId?: string;
  /**
   * @remarks
   * The returned results.
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

