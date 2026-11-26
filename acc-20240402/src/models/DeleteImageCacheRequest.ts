// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteImageCacheRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to force delete the image cache. Default value: `false`.
   * 
   * @example
   * false
   */
  force?: boolean;
  /**
   * @remarks
   * The image cache ID.
   * 
   * This parameter is required.
   * 
   * @example
   * imc-bp1dj*****
   */
  imageCacheId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      force: 'Force',
      imageCacheId: 'ImageCacheId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      force: 'boolean',
      imageCacheId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

