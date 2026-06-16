// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCaInstanceCrlAddressRequest extends $dara.Model {
  /**
   * @remarks
   * The identifier of the CA certificate.
   * 
   * @example
   * 1f0167b4-ee84-XXX-49bc4d39fa68
   */
  caIdentifier?: string;
  /**
   * @remarks
   * The ID of the zone where the CAS instance resides.
   * 
   * @example
   * 1f047318-0815-XXX-f7ceb76b5c0a
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      caIdentifier: 'CaIdentifier',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caIdentifier: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

