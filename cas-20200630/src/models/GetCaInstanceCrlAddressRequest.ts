// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCaInstanceCrlAddressRequest extends $dara.Model {
  /**
   * @remarks
   * The CA certificate identifier.
   * 
   * @example
   * 1f0167b4-ee84-XXX-49bc4d39fa68
   */
  caIdentifier?: string;
  /**
   * @remarks
   * The zone ID of the China CAS instance.
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

