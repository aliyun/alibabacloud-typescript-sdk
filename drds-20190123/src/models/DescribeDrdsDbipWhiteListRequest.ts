// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDrdsDBIpWhiteListRequest extends $dara.Model {
  /**
   * @remarks
   * The database name.
   * 
   * This parameter is required.
   * 
   * @example
   * test_db
   */
  dbName?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * drds********
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * The name of the whitelist group.
   * 
   * @example
   * group1
   */
  groupName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      groupName: 'GroupName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
      groupName: 'string',
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

