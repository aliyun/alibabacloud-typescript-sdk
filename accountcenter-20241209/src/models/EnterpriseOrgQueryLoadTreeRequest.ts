// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnterpriseOrgQueryLoadTreeRequest extends $dara.Model {
  encryptTicket?: string;
  /**
   * @example
   * true
   */
  loadOrgOnly?: boolean;
  orientedEcId?: string;
  orientedLeId?: string;
  orientedNbId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CF20ED94-D406-512F-9798-4E1F65720BF6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      encryptTicket: 'EncryptTicket',
      loadOrgOnly: 'LoadOrgOnly',
      orientedEcId: 'OrientedEcId',
      orientedLeId: 'OrientedLeId',
      orientedNbId: 'OrientedNbId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encryptTicket: 'string',
      loadOrgOnly: 'boolean',
      orientedEcId: 'string',
      orientedLeId: 'string',
      orientedNbId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

