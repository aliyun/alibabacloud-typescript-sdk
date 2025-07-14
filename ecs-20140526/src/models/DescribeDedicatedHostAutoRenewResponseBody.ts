// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDedicatedHostAutoRenewResponseBodyDedicatedHostRenewAttributesDedicatedHostRenewAttribute extends $dara.Model {
  /**
   * @remarks
   * Indicates whether auto-renewal is enabled. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  autoRenewEnabled?: boolean;
  /**
   * @remarks
   * Indicates whether the dedicated host is automatically renewed if a subscription ECS instance it hosts, after being automatically renewed, has a new expiration time that is later than that of the dedicated host. Valid values:
   * 
   * *   AutoRenewWithEcs: The dedicated host is automatically renewed along with the ECS instance.
   * *   StopRenewWithEcs: The dedicated host is not automatically renewed along with the ECS instance.
   * 
   * @example
   * StopRenewWithEcs
   */
  autoRenewWithEcs?: string;
  /**
   * @remarks
   * The ID of the dedicated host.
   * 
   * @example
   * dh-bp165p6xk2tlw61e****
   */
  dedicatedHostId?: string;
  /**
   * @remarks
   * The auto-renewal period.
   * 
   * @example
   * 0
   */
  duration?: number;
  /**
   * @remarks
   * The unit of the auto-renewal duration. Valid values:
   * 
   * *   Week
   * *   Month
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * Indicates whether the subscription dedicated host is automatically renewed. Valid values:
   * 
   * *   AutoRenewal: The dedicated host is automatically renewed.
   * *   Normal: The dedicated host is not automatically renewed, but renewal notifications are sent.
   * *   NotRenewal: The dedicated host is not automatically renewed, and no expiration notification is sent. Alibaba Cloud sends only a non-renewal notice three days before the host expires. If the renewal status of a dedicated host is NotRenewal, you can change the value to Normal and then call [RenewDedicatedHosts](https://help.aliyun.com/document_detail/93287.html) to manually renew the dedicated host, or directly change the value to AutoRenewal.
   * 
   * @example
   * Normal
   */
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
  /**
   * @remarks
   * The array that consists of dedicated host auto-renewal attributes.
   */
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

