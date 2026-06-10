// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyOutboundCallNumberRequest extends $dara.Model {
  /**
   * @remarks
   * Instance ID
   * 
   * This parameter is required.
   * 
   * @example
   * 8fa1953f-4a84-46d8-b80c-8ce9cf684fb3
   */
  instanceId?: string;
  /**
   * @remarks
   * The number to modify
   * 
   * This parameter is required.
   * 
   * @example
   * 10088xxx
   */
  number?: string;
  /**
   * @remarks
   * Number ID
   * 
   * This parameter is required.
   * 
   * @example
   * fa0e21e9-caab-4629-9121-1e341243d599
   */
  outboundCallNumberId?: string;
  /**
   * @remarks
   * Number of rate limiting rules
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  rateLimitCount?: number;
  /**
   * @remarks
   * Rate limiting time window, in seconds
   * 
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

