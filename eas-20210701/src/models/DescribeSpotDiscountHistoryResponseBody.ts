// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSpotDiscountHistoryResponseBodySpotDiscounts extends $dara.Model {
  /**
   * @remarks
   * The type of the ECS instance.
   * 
   * @example
   * ecs.c7.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The discount for the preemptible instance. For example, 0.1 represents a 90% discount.
   * 
   * @example
   * 0.1
   */
  spotDiscount?: string;
  /**
   * @remarks
   * The time when the discount is available. The time must be in UTC.
   * 
   * @example
   * 2024-04-10T10:00:00Z
   */
  timestamp?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
      spotDiscount: 'SpotDiscount',
      timestamp: 'Timestamp',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
      spotDiscount: 'string',
      timestamp: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSpotDiscountHistoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82***
   */
  requestId?: string;
  /**
   * @remarks
   * The discount for the preemptible instance.
   */
  spotDiscounts?: DescribeSpotDiscountHistoryResponseBodySpotDiscounts[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      spotDiscounts: 'SpotDiscounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      spotDiscounts: { 'type': 'array', 'itemType': DescribeSpotDiscountHistoryResponseBodySpotDiscounts },
    };
  }

  validate() {
    if(Array.isArray(this.spotDiscounts)) {
      $dara.Model.validateArray(this.spotDiscounts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

