// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceAutoRenewAttributeResponseBodyInstanceRenewAttributesInstanceRenewAttribute extends $dara.Model {
  /**
   * @remarks
   * The renewal type of the instance.
   * 
   * *   **true**: enables auto-renewal.
   * *   **false**: disables auto-renewal.
   * 
   * @example
   * false
   */
  autoRenewal?: boolean;
  /**
   * @remarks
   * The unit of the auto-renewal period.
   * 
   * @example
   * 0
   */
  duration?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * i-5ci7l7k1m9m2zmhp4iw3o****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenewal: 'AutoRenewal',
      duration: 'Duration',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenewal: 'boolean',
      duration: 'string',
      instanceId: 'string',
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
  /**
   * @remarks
   * The returned service code. A value of 0 indicates that the operation was successful.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The renewal status of the instance.
   */
  instanceRenewAttributes?: DescribeInstanceAutoRenewAttributeResponseBodyInstanceRenewAttributes;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4DD66F05-3116-4BAA-B588-52EB2E7F431D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      instanceRenewAttributes: 'InstanceRenewAttributes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      instanceRenewAttributes: DescribeInstanceAutoRenewAttributeResponseBodyInstanceRenewAttributes,
      requestId: 'string',
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

