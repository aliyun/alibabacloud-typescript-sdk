// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceInstanceSubscriptionEstimateCostRequestResourcePeriod extends $dara.Model {
  /**
   * @remarks
   * Renewal duration. The unit is specified by PeriodUnit.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The time unit for the resource renewal duration, which is the unit of the Period parameter. Valid values: Month, Year. Default value: Month.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * Resource ARN (Aliyun Resource Name).
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

