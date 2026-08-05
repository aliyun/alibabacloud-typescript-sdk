// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AgentAuthorizationPrincipal extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  principalId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  principalType?: string;
  static names(): { [key: string]: string } {
    return {
      principalId: 'principalId',
      principalType: 'principalType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      principalId: 'string',
      principalType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

