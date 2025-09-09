// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDrdsDbRdsNameListRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the database.
   * 
   * This parameter is required.
   * 
   * @example
   * drds_test
   */
  dbName?: string;
  /**
   * @remarks
   * The ID of the PolarDB-X 1.0 instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drdsxxxxxxxxxxx
   */
  drdsInstanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
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

