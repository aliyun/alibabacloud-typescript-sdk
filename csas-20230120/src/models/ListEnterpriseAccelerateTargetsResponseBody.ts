// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEnterpriseAccelerateTargetsResponseBody extends $dara.Model {
  /**
   * @example
   * eap-7fed37a757a0de24
   */
  eapId?: string;
  /**
   * @example
   * 529F755E-2E75-52EC-9C2E-6293FB8BF986
   */
  requestId?: string;
  targets?: string[];
  /**
   * @example
   * 103
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      eapId: 'EapId',
      requestId: 'RequestId',
      targets: 'Targets',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eapId: 'string',
      requestId: 'string',
      targets: { 'type': 'array', 'itemType': 'string' },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.targets)) {
      $dara.Model.validateArray(this.targets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

