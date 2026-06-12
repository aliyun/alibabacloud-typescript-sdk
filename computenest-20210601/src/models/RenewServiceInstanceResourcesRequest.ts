// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RenewServiceInstanceResourcesRequestResourcePeriod extends $dara.Model {
  /**
   * @remarks
   * The renewal duration for the resource. The unit is specified by \\`PeriodUnit\\`.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The time unit of the renewal duration for the resource. This parameter specifies the unit for \\`Period\\`. Valid values: \\`Month\\` and \\`Year\\`. Default value: \\`Month\\`.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The Aliyun Resource Name (ARN) of the resource.
   * 
   * @example
   * acs:ecs:cn-hongkong:1488317743351199:instance/i-j6c6f3lbky38o8rpeqw2
   */
  resourceArn?: string;
  static names(): { [key: string]: string } {
    return {
      period: 'Period',
      periodUnit: 'PeriodUnit',
      resourceArn: 'ResourceArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      period: 'number',
      periodUnit: 'string',
      resourceArn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewServiceInstanceResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * A client token to ensure that the request is idempotent. Generate a unique value for this parameter from your client for each request. The token can contain only ASCII characters and must not exceed 64 characters in length.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The renewal duration for all subscription resources in the service instance. The unit is specified by \\`PeriodUnit\\`.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The time unit of the renewal duration for all subscription resources in the service instance. This parameter specifies the unit for \\`Period\\`. Valid values: \\`Month\\` and \\`Year\\`. Default value: \\`Month\\`.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The list of resource renewals.
   */
  resourcePeriod?: RenewServiceInstanceResourcesRequestResourcePeriod[];
  /**
   * @remarks
   * The service instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * si-b58c874912fc4294****
   */
  serviceInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      regionId: 'RegionId',
      resourcePeriod: 'ResourcePeriod',
      serviceInstanceId: 'ServiceInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      period: 'number',
      periodUnit: 'string',
      regionId: 'string',
      resourcePeriod: { 'type': 'array', 'itemType': RenewServiceInstanceResourcesRequestResourcePeriod },
      serviceInstanceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resourcePeriod)) {
      $dara.Model.validateArray(this.resourcePeriod);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

