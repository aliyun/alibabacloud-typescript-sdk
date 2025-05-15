// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetServiceInstanceSubscriptionEstimateCostRequestResourcePeriod } from "./GetServiceInstanceSubscriptionEstimateCostRequestResourcePeriod";


export class GetServiceInstanceSubscriptionEstimateCostRequest extends $dara.Model {
  /**
   * @remarks
   * Ensures idempotence of the request. Generate a parameter value from your client to ensure its uniqueness across different requests. **ClientToken** supports only ASCII characters and cannot exceed 64 characters.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Order type. Possible value: Renewal.
   * 
   * This parameter is required.
   * 
   * @example
   * Renewal
   */
  orderType?: string;
  /**
   * @remarks
   * The renewal duration for all prepaid resources of the service instance. The unit is specified by PeriodUnit.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The time unit for the renewal duration of all prepaid resources of the service instance, which is the unit of the Period parameter. Valid values: Month, Year. Default value: Month.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * Region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Resource renewal configuration.
   */
  resourcePeriod?: GetServiceInstanceSubscriptionEstimateCostRequestResourcePeriod[];
  /**
   * @remarks
   * Service instance ID.
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

