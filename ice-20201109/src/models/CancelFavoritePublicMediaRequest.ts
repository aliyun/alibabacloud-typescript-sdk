// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelFavoritePublicMediaRequest extends $dara.Model {
  /**
   * @example
   * icepublic-****7213c6050cbc66750b469701****,icepublic-****0b4697017213c6050cbc6675****
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

