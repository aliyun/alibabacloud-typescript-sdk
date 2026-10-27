// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNumberRequestNumbers extends $dara.Model {
  /**
   * @remarks
   * The phone number.
   * 
   * @example
   * 057188886666
   */
  number?: string;
  /**
   * @remarks
   * The maximum number of requests allowed within the throttling period.
   * 
   * @example
   * 100
   */
  rateLimitCount?: number;
  /**
   * @remarks
   * The throttling period, in seconds.
   * 
   * @example
   * 60
   */
  rateLimitPeriod?: number;
  static names(): { [key: string]: string } {
    return {
      number: 'Number',
      rateLimitCount: 'RateLimitCount',
      rateLimitPeriod: 'RateLimitPeriod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      number: 'string',
      rateLimitCount: 'number',
      rateLimitPeriod: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNumberRequest extends $dara.Model {
  /**
   * @remarks
   * The list of phone numbers to create and associate. A maximum of 100 phone numbers can be specified in a single request.
   * 
   * This parameter is required.
   */
  numbers?: CreateNumberRequestNumbers[];
  /**
   * @remarks
   * The unique identifier of the SIP trunk.
   * 
   * This parameter is required.
   * 
   * @example
   * 6bf8a1d2-3c4e-4f5a-9b8c-7d6e5f4a3b2c
   */
  trunkId?: string;
  static names(): { [key: string]: string } {
    return {
      numbers: 'Numbers',
      trunkId: 'TrunkId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      numbers: { 'type': 'array', 'itemType': CreateNumberRequestNumbers },
      trunkId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.numbers)) {
      $dara.Model.validateArray(this.numbers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

