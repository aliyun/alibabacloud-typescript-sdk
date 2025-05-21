// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddDocumentInfo extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pdf
   */
  documentType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      documentType: 'documentType',
      name: 'name',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      documentType: 'string',
      name: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

