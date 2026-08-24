// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetKVCacheStoreRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * kvcs-your-id
   */
  kvcsId?: string;
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
      kvcsId: 'KvcsId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kvcsId: 'string',
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

