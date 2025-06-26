// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceClassResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * cc-xxxxxxx
   */
  DBInstanceID?: number;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * cc-xxxxxxx
   */
  DBInstanceName?: string;
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
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 10000****
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceID: 'DBInstanceID',
      DBInstanceName: 'DBInstanceName',
      scaleMax: 'ScaleMax',
      scaleMin: 'ScaleMin',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceID: 'number',
      DBInstanceName: 'string',
      scaleMax: 'number',
      scaleMin: 'number',
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

