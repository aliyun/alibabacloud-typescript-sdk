// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteLakeStorageRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL cluster.
   * 
   * @example
   * amv-bp*********
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The ID of the lake storage.
   * 
   * This parameter is required.
   * 
   * @example
   * -
   */
  lakeStorageId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      lakeStorageId: 'LakeStorageId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      lakeStorageId: 'string',
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

