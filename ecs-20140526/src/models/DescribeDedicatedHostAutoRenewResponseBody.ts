// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDedicatedHostAutoRenewResponseBodyDedicatedHostRenewAttributesDedicatedHostRenewAttribute extends $dara.Model {
  autoRenewEnabled?: boolean;
  autoRenewWithEcs?: string;
  dedicatedHostId?: string;
  duration?: number;
  periodUnit?: string;
  renewalStatus?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenewEnabled: 'AutoRenewEnabled',
      autoRenewWithEcs: 'AutoRenewWithEcs',
      dedicatedHostId: 'DedicatedHostId',
      duration: 'Duration',
      periodUnit: 'PeriodUnit',
      renewalStatus: 'RenewalStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenewEnabled: 'boolean',
      autoRenewWithEcs: 'string',
      dedicatedHostId: 'string',
      duration: 'number',
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

export class DescribeDedicatedHostAutoRenewResponseBodyDedicatedHostRenewAttributes extends $dara.Model {
  dedicatedHostRenewAttribute?: DescribeDedicatedHostAutoRenewResponseBodyDedicatedHostRenewAttributesDedicatedHostRenewAttribute[];
  static names(): { [key: string]: string } {
    return {
      dedicatedHostRenewAttribute: 'DedicatedHostRenewAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostRenewAttribute: { 'type': 'array', 'itemType': DescribeDedicatedHostAutoRenewResponseBodyDedicatedHostRenewAttributesDedicatedHostRenewAttribute },
    };
  }

  validate() {
    if(Array.isArray(this.dedicatedHostRenewAttribute)) {
      $dara.Model.validateArray(this.dedicatedHostRenewAttribute);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostAutoRenewResponseBody extends $dara.Model {
  dedicatedHostRenewAttributes?: DescribeDedicatedHostAutoRenewResponseBodyDedicatedHostRenewAttributes;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dedicatedHostRenewAttributes: 'DedicatedHostRenewAttributes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostRenewAttributes: DescribeDedicatedHostAutoRenewResponseBodyDedicatedHostRenewAttributes,
      requestId: 'string',
    };
  }

  validate() {
    if(this.dedicatedHostRenewAttributes && typeof (this.dedicatedHostRenewAttributes as any).validate === 'function') {
      (this.dedicatedHostRenewAttributes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

