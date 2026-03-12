// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchGetYikeAssetMediaInfosRequest extends $dara.Model {
  /**
   * @example
   * ******b48fb04483915d4f2cd8******,******c48fb37407365d4f2cd8******
   */
  mediaIds?: string;
  static names(): { [key: string]: string } {
    return {
      mediaIds: 'MediaIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

