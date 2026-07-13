// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifyAtiAgentRegisterInfoAcmeChallengeRecordRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2074753647748672512
   */
  agentRegisterInfoId?: string;
  /**
   * @example
   * eyJhbGciOiJIUzI1NiIsInR5cC.....
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      agentRegisterInfoId: 'AgentRegisterInfoId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentRegisterInfoId: 'string',
      clientToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

