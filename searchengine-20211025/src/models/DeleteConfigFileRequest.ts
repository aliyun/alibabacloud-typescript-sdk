// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteConfigFileRequest extends $dara.Model {
  /**
   * @remarks
   * The file name.
   * 
   * This parameter is required.
   * 
   * @example
   * /schemas/automobile_vector_schema.json
   */
  fileName?: string;
  /**
   * @remarks
   * The path of the parent directory.
   * 
   * This parameter is required.
   * 
   * @example
   * /
   */
  parentFullPath?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'fileName',
      parentFullPath: 'parentFullPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      parentFullPath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

