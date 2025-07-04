// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAdvanceConfigFileRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the file
   * 
   * This parameter is required.
   * 
   * @example
   * /intervene_dict/chn_ecommerce_general.dict
   */
  fileName?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'fileName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

