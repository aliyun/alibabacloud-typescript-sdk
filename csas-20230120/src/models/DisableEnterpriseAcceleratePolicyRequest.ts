// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisableEnterpriseAcceleratePolicyRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eap-d50b45aa7dc04aef
   */
  eapId?: string;
  static names(): { [key: string]: string } {
    return {
      eapId: 'EapId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eapId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

