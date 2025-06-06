// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteEnterpriseAccelerateTargetRequest extends $dara.Model {
  /**
   * @example
   * eap-ed1f0e392a28a4e6
   */
  eapId?: string;
  target?: string[];
  static names(): { [key: string]: string } {
    return {
      eapId: 'EapId',
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eapId: 'string',
      target: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.target)) {
      $dara.Model.validateArray(this.target);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

