// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteYikeAssetMediaInfosRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  logicDelete?: boolean;
  /**
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

