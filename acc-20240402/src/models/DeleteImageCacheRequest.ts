// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteImageCacheRequest extends $dara.Model {
  /**
   * @example
   * false
   */
  force?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * imc-bp1dj*****
   */
  imageCacheId?: string;
  /**
   * @remarks
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

