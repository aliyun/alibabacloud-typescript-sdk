// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifyCenResponseBodyRouteEntries extends $dara.Model {
  /**
   * @remarks
   * The CIDR block of the route.
   * 
   * @example
   * 172.16.111.3****
   */
  destinationCidrBlock?: string;
  /**
   * @remarks
   * The ID of the instance corresponding to the route.
   * 
   * @example
   * vpc-uf62bu0xs5j8md54p****
   */
  nextHopInstanceId?: string;
  /**
   * @remarks
   * The region ID of the route.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The verification result of the route.
   * 
   * Valid values:
   * 
   * *   Conflict: A CIDR block conflict exists.
   * *   Access: The verification is passed.
   * 
   * @example
   * Access
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      destinationCidrBlock: 'DestinationCidrBlock',
      nextHopInstanceId: 'NextHopInstanceId',
      regionId: 'RegionId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationCidrBlock: 'string',
      nextHopInstanceId: 'string',
      regionId: 'string',
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

export class VerifyCenResponseBody extends $dara.Model {
  /**
   * @remarks
   * The recommended IPv4 CIDR blocks. Three CIDR blocks are randomly recommended. This parameter is returned when the `Status` value is `Conflict`.
   */
  cidrBlocks?: string[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0AF9D857-AE96-53D6-B317-5DD665EC4EC0
   */
  requestId?: string;
  /**
   * @remarks
   * The routes provided by the CEN instance.
   */
  routeEntries?: VerifyCenResponseBodyRouteEntries[];
  /**
   * @remarks
   * The check result of CIDR block conflict.
   * 
   * Valid values:
   * 
   * *   InvalidCen.CenUidInvalid: The Alibaba Cloud account is invalid or the Alibaba Cloud account does not have the permission to access Elastic Desktop Service.
   * *   VerifyCode.InvalidTokenCode: The verification code is invalid.
   * *   VerifyCode.ReachTokenRetryTime: The maximum number of times for entering a verification code reaches the limit.
   * *   Conflict: A CIDR block conflict exists. If the verification result of at least one route is Conflict, Conflict is returned for this parameter.
   * *   Access: The verification is passed. If the verification result for all routes is Access, Access is returned for this parameter.
   * *   InvalidCen.ParameterCenInstanceId: The Alibaba Cloud account does not own the CEN instance.
   * 
   * @example
   * Access
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      cidrBlocks: 'CidrBlocks',
      requestId: 'RequestId',
      routeEntries: 'RouteEntries',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrBlocks: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      routeEntries: { 'type': 'array', 'itemType': VerifyCenResponseBodyRouteEntries },
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.cidrBlocks)) {
      $dara.Model.validateArray(this.cidrBlocks);
    }
    if(Array.isArray(this.routeEntries)) {
      $dara.Model.validateArray(this.routeEntries);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

