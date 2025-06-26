// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceClassRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-xxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The maximum capacity for elastic scaling.
   * 
   * @example
   * 32
   */
  scaleMax?: number;
  /**
   * @remarks
   * The minimum capacity for elastic scaling.
   * 
   * @example
   * 2
   */
  scaleMin?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      regionId: 'RegionId',
      scaleMax: 'ScaleMax',
      scaleMin: 'ScaleMin',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      regionId: 'string',
      scaleMax: 'number',
      scaleMin: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

