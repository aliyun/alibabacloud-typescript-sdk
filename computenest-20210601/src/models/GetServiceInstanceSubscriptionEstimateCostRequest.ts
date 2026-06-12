// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceInstanceSubscriptionEstimateCostRequestResourcePeriod extends $dara.Model {
  /**
   * @remarks
   * The renewal duration. The unit is specified by PeriodUnit.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the renewal duration for the resource. This is the unit for the Period parameter. Valid values: Month and Year. Default value: Month.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the resource.
   * 
   * @example
   * acs:ecs:cn-guangzhou:1361753504587228:instance/i-7xv9pgeqvhxg10jji3vd
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

export class GetServiceInstanceSubscriptionEstimateCostRequest extends $dara.Model {
  /**
   * @remarks
   * A client-generated token that ensures the idempotence of the request. The token must be unique for each request. It can contain only ASCII characters and cannot be longer than 64 characters.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The order type. Valid value: Renewal.
   * 
   * This parameter is required.
   * 
   * @example
   * Renewal
   */
  orderType?: string;
  /**
   * @remarks
   * The renewal duration for all subscription resources of the service instance. The unit is specified by PeriodUnit.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the renewal duration for all subscription resources of the service instance. This is the unit for the Period parameter. Valid values: Month and Year. Default value: Month.
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
   * The renewal configuration for the resources.
   */
  resourcePeriod?: GetServiceInstanceSubscriptionEstimateCostRequestResourcePeriod[];
  /**
   * @remarks
   * The service instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * si-d6ab3a63ccbb4b17****
   */
  serviceInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      orderType: 'OrderType',
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
      orderType: 'string',
      period: 'number',
      periodUnit: 'string',
      regionId: 'string',
      resourcePeriod: { 'type': 'array', 'itemType': GetServiceInstanceSubscriptionEstimateCostRequestResourcePeriod },
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

