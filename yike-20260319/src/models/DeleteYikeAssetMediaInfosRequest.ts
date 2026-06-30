// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteYikeAssetMediaInfosRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to delete the media asset information and files. Valid values:
   * - true (default): logical deletion. The media asset is moved to the recycle bin, and the files are retained.
   * - false: deletes the media asset information and files.
   * 
   * @example
   * true
   */
  logicDelete?: boolean;
  /**
   * @remarks
   * The ICE media asset ID.
   * 
   * @example
   * ****20b48fb04483915d4f2cd8ac****,****15d4a4b0448391508f2cb486****
   */
  mediaIds?: string;
  static names(): { [key: string]: string } {
    return {
      logicDelete: 'LogicDelete',
      mediaIds: 'MediaIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logicDelete: 'boolean',
      mediaIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

