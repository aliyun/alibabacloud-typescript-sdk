// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyPolarDbReadWeightRequest extends $dara.Model {
  /**
   * @remarks
   * Polar cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-****************
   */
  dbInstanceId?: string;
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
   * The node list in the destination apsaradb for PolarDB cluster. The nodes in each cluster are separated with commas (,) and colons (:).
   * 
   * This parameter is required.
   * 
   * @example
   * pi-****************,pi-****************:pi-****************
   */
  dbNodeIds?: string;
  /**
   * @remarks
   * The ID of a DRDS instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drds************
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * The weight of the PolarDB cluster. Separate multiple weights with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * 14,86
   */
  weights?: string;
  static names(): { [key: string]: string } {
    return {
      dbInstanceId: 'DbInstanceId',
      dbName: 'DbName',
      dbNodeIds: 'DbNodeIds',
      drdsInstanceId: 'DrdsInstanceId',
      weights: 'Weights',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbInstanceId: 'string',
      dbName: 'string',
      dbNodeIds: 'string',
      drdsInstanceId: 'string',
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

