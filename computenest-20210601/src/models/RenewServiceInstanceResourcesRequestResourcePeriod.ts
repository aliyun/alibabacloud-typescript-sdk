// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RenewServiceInstanceResourcesRequestResourcePeriod extends $dara.Model {
  /**
   * @remarks
   * The renewal duration for the resource. The unit is specified by PeriodUnit.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The time unit for the renewal duration of the resource, which is the unit for the Period parameter. Valid values: Month, Year. Default value: Month.
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

