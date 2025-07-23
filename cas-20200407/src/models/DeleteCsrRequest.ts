// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCsrRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the CSR.
   * 
   * This parameter is required.
   * 
   * @example
   * 3013
   */
  csrId?: number;
  static names(): { [key: string]: string } {
    return {
      csrId: 'CsrId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      csrId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

