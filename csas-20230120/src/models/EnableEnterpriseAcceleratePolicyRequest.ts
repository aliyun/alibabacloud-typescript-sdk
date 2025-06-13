// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableEnterpriseAcceleratePolicyRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eap-530da9f7110441fb
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

