// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyOutboundCallNumberRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 52e80b02-0126-4556-a1e6-ef5b3747ed53/a9a3ddc7-d7d7-48cd-82b5-b31bb5510e71_2a66f8ad-dfbb-4980-9b84-439171295a11.xlsx
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10088
   */
  number?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * fa0e21e9-caab-4629-9121-1e341243d599
   */
  outboundCallNumberId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  rateLimitCount?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 100
   */
  rateLimitPeriod?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      number: 'Number',
      outboundCallNumberId: 'OutboundCallNumberId',
      rateLimitCount: 'RateLimitCount',
      rateLimitPeriod: 'RateLimitPeriod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      number: 'string',
      outboundCallNumberId: 'string',
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

