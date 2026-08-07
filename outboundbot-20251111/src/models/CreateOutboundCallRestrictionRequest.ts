// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOutboundCallRestrictionRequestOutboundCallRestriction extends $dara.Model {
  /**
   * @remarks
   * The phone number.
   * 
   * @example
   * 02032734241
   */
  number?: string;
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * Do-not-disturb user
   */
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      number: 'Number',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      number: 'string',
      remark: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOutboundCallRestrictionRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 4f9a8e2b-6c1d-4a7e-9b3f-2d5c8a1e7b04
   */
  instanceId?: string;
  /**
   * @remarks
   * The outbound call restriction.
   */
  outboundCallRestriction?: CreateOutboundCallRestrictionRequestOutboundCallRestriction[];
  /**
   * @remarks
   * The policy. Valid values:
   * 0: blacklist.
   * 1: whitelist.
   * 
   * @example
   * 0
   */
  policy?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      outboundCallRestriction: 'OutboundCallRestriction',
      policy: 'Policy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      outboundCallRestriction: { 'type': 'array', 'itemType': CreateOutboundCallRestrictionRequestOutboundCallRestriction },
      policy: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.outboundCallRestriction)) {
      $dara.Model.validateArray(this.outboundCallRestriction);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

