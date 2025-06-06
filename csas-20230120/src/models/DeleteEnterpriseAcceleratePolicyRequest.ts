// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteEnterpriseAcceleratePolicyRequest extends $dara.Model {
  /**
   * @example
   * eap-6edfb9d722ef8429
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

