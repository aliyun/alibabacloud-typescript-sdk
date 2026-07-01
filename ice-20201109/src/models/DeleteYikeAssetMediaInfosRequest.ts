// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteYikeAssetMediaInfosRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to perform a logical delete or a permanent delete. Valid values:
   * 
   * - true (default): Performs a logical delete. This action moves the media asset to the recycle bin and retains its associated file.
   * 
   * - false: Performs a permanent delete. This action deletes both the media asset information and the associated file.
   * 
   * @example
   * true
   */
  logicDelete?: boolean;
  /**
   * @remarks
   * A comma-separated list of media asset IDs.
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

