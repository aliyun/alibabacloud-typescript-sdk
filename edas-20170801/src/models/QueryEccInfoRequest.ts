// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryEccInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ECC.
   * 
   * This parameter is required.
   * 
   * @example
   * b197-40ab-9155-****
   */
  eccId?: string;
  static names(): { [key: string]: string } {
    return {
      eccId: 'EccId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eccId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

