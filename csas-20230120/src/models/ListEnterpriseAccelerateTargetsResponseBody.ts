// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEnterpriseAccelerateTargetsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Enterprise Acceleration Policy ID.
   * 
   * @example
   * eap-7fed37a757a0de24
   */
  eapId?: string;
  /**
   * @remarks
   * ID of the current request.
   * 
   * @example
   * 529F755E-2E75-52EC-9C2E-6293FB8BF986
   */
  requestId?: string;
  /**
   * @remarks
   * List of enterprise acceleration targets.
   */
  targets?: string[];
  /**
   * @remarks
   * The total number of addresses.
   * 
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

