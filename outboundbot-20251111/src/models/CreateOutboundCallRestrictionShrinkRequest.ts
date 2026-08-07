// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOutboundCallRestrictionShrinkRequest extends $dara.Model {
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
  outboundCallRestrictionShrink?: string;
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
      outboundCallRestrictionShrink: 'OutboundCallRestriction',
      policy: 'Policy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      outboundCallRestrictionShrink: 'string',
      policy: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

