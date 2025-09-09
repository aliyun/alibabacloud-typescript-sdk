// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDrdsParamsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the database.
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
   * DescribeDrdsParams
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * The type of nodes whose parameters you want to query. Valid values:
   * 
   * *   **INSTANCE: the instance level.**
   * *   **DB**: the database level.
   * 
   * This parameter is required.
   * 
   * @example
   * INSTANCE
   */
  paramLevel?: string;
  /**
   * @remarks
   * The ID of the region where the PolarDB-X 1.0 instance is created.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      paramLevel: 'ParamLevel',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
      paramLevel: 'string',
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

