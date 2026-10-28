// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListKVCacheStoreAvailableHpnZonesRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the KVCacheStore instances. Separate multiple IDs with commas. You can specify 1 to 100 IDs.
   * 
   * This parameter is required.
   */
  kvcsIds?: string[];
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
      kvcsIds: 'KvcsIds',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kvcsIds: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.kvcsIds)) {
      $dara.Model.validateArray(this.kvcsIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

