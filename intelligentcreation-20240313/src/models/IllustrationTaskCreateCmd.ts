// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IllustrationTaskCreateCmd extends $dara.Model {
  /**
   * @example
   * 0-不换背景，1-换背景
   */
  backgroundType?: number;
  /**
   * @example
   * 1024
   */
  dstHeight?: number;
  /**
   * @example
   * 1024
   */
  dstWidth?: number;
  /**
   * @example
   * 28274623764834
   */
  idempotentId?: string;
  imageUrls?: string[];
  /**
   * @example
   * 4
   */
  nums?: number;
  ossPaths?: string[];
  stickerText?: string;
  static names(): { [key: string]: string } {
    return {
      backgroundType: 'backgroundType',
      dstHeight: 'dstHeight',
      dstWidth: 'dstWidth',
      idempotentId: 'idempotentId',
      imageUrls: 'imageUrls',
      nums: 'nums',
      ossPaths: 'ossPaths',
      stickerText: 'stickerText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backgroundType: 'number',
      dstHeight: 'number',
      dstWidth: 'number',
      idempotentId: 'string',
      imageUrls: { 'type': 'array', 'itemType': 'string' },
      nums: 'number',
      ossPaths: { 'type': 'array', 'itemType': 'string' },
      stickerText: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.imageUrls)) {
      $dara.Model.validateArray(this.imageUrls);
    }
    if(Array.isArray(this.ossPaths)) {
      $dara.Model.validateArray(this.ossPaths);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

