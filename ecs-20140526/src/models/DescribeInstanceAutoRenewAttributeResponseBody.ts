// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceAutoRenewAttributeResponseBodyInstanceRenewAttributesInstanceRenewAttribute extends $dara.Model {
  autoRenewEnabled?: boolean;
  duration?: number;
  enableExpectedRenewDay?: boolean;
  instanceId?: string;
  periodUnit?: string;
  renewalStatus?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenewEnabled: 'AutoRenewEnabled',
      duration: 'Duration',
      enableExpectedRenewDay: 'EnableExpectedRenewDay',
      instanceId: 'InstanceId',
      periodUnit: 'PeriodUnit',
      renewalStatus: 'RenewalStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenewEnabled: 'boolean',
      duration: 'number',
      enableExpectedRenewDay: 'boolean',
      instanceId: 'string',
      periodUnit: 'string',
      renewalStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAutoRenewAttributeResponseBodyInstanceRenewAttributes extends $dara.Model {
  instanceRenewAttribute?: DescribeInstanceAutoRenewAttributeResponseBodyInstanceRenewAttributesInstanceRenewAttribute[];
  static names(): { [key: string]: string } {
    return {
      instanceRenewAttribute: 'InstanceRenewAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceRenewAttribute: { 'type': 'array', 'itemType': DescribeInstanceAutoRenewAttributeResponseBodyInstanceRenewAttributesInstanceRenewAttribute },
    };
  }

  validate() {
    if(Array.isArray(this.instanceRenewAttribute)) {
      $dara.Model.validateArray(this.instanceRenewAttribute);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAutoRenewAttributeResponseBody extends $dara.Model {
  instanceRenewAttributes?: DescribeInstanceAutoRenewAttributeResponseBodyInstanceRenewAttributes;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of queried instances.
   * 
   * @example
   * 6
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instanceRenewAttributes: 'InstanceRenewAttributes',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceRenewAttributes: DescribeInstanceAutoRenewAttributeResponseBodyInstanceRenewAttributes,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.instanceRenewAttributes && typeof (this.instanceRenewAttributes as any).validate === 'function') {
      (this.instanceRenewAttributes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

