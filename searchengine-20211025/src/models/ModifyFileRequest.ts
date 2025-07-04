// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyFileRequest extends $dara.Model {
  /**
   * @remarks
   * The file content.
   * 
   * @example
   * ""
   */
  content?: string;
  /**
   * @remarks
   * The number of shards.
   * 
   * @example
   * ds=20220713
   */
  partition?: number;
  /**
   * @remarks
   * The name of the file in the full path
   * 
   * This parameter is required.
   * 
   * @example
   * /schemas/generation_schema.json
   */
  fileName?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      partition: 'partition',
      fileName: 'fileName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      partition: 'number',
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

