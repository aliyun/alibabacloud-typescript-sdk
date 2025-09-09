// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyRdsReadWeightRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the database.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  dbName?: string;
  /**
   * @remarks
   * The ID of the PolarDB-X 1.0 instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drds************
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * The names of the ApsaraDB RDS for MySQL instances. Separate the names with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * rm-****************,rm-****************
   */
  instanceNames?: string;
  /**
   * @remarks
   * The weights of the ApsaraDB RDS for MySQL instances. Separate the weights with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * 14,86
   */
  weights?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      instanceNames: 'InstanceNames',
      weights: 'Weights',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
      instanceNames: 'string',
      weights: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

