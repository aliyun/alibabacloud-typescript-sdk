// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BeginSessionRequest extends $dara.Model {
  /**
   * @remarks
   * The key for the business space. If not specified, the default business space is used. You can find the key on the Business Management page of your main account.
   * 
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  instanceId?: string;
  sandBox?: boolean;
  sessionId?: string;
  vendorParam?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      instanceId: 'InstanceId',
      sandBox: 'SandBox',
      sessionId: 'SessionId',
      vendorParam: 'VendorParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      instanceId: 'string',
      sandBox: 'boolean',
      sessionId: 'string',
      vendorParam: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

