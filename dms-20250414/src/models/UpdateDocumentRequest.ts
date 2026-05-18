// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDocumentRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test.md
   */
  documentName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * kb-***
   */
  kbUuid?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test123
   */
  newDescription?: string;
  static names(): { [key: string]: string } {
    return {
      documentName: 'DocumentName',
      kbUuid: 'KbUuid',
      newDescription: 'NewDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      documentName: 'string',
      kbUuid: 'string',
      newDescription: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

