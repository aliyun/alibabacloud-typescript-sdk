// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteEcuRequest extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the ECU to be deleted.
   * 
   * This parameter is required.
   * 
   * @example
   * 5c0b8c82-4ba9-****-****-130a34ffa534
   */
  ecuId?: string;
  static names(): { [key: string]: string } {
    return {
      ecuId: 'EcuId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecuId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

