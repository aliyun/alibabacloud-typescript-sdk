// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkitemAttachmentCreatemetaRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * application.jar
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

