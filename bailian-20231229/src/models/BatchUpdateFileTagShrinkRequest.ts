// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchUpdateFileTagShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of documents to update.
   * 
   * This parameter is required.
   */
  fileInfosShrink?: string;
  /**
   * @remarks
   * The update mode. Valid values: APPEND (append) and OVERWRITE (overwrite).
   * 
   * @example
   * OVERWRITE
   */
  updateMode?: string;
  static names(): { [key: string]: string } {
    return {
      fileInfosShrink: 'FileInfos',
      updateMode: 'UpdateMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileInfosShrink: 'string',
      updateMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

