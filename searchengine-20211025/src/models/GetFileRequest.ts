// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFileRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the file in full path
   * 
   * This parameter is required.
   * 
   * @example
   * /schemas/automobile_vector_schema.json
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

