// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteKVCacheStoreRequest extends $dara.Model {
  /**
   * @remarks
   * The KvCacheStore instance ID. Only instances in the following states can be deleted: Available and Stopped. Instances in other states cannot be deleted.
   * 
   * This parameter is required.
   * 
   * @example
   * kvcs-your-id
   */
  kvcsId?: string;
  /**
   * @remarks
   * The region ID, such as cn-hangzhou.
   * 
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

