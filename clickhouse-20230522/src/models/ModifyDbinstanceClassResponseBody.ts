// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceClassResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The compute group ID.
   * 
   * @example
   * cc-gs5j3sua77*******-clickhouse
   */
  computingGroupId?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * cc-gs5j3sua77*******
   */
  DBInstanceID?: number;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * cc-gs5j3sua77*******
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The maximum value for serverless elastic scaling.
   * 
   * @example
   * 32
   */
  scaleMax?: number;
  /**
   * @remarks
   * The minimum value for serverless elastic scaling.
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
      computingGroupId: 'ComputingGroupId',
      DBInstanceID: 'DBInstanceID',
      DBInstanceName: 'DBInstanceName',
      scaleMax: 'ScaleMax',
      scaleMin: 'ScaleMin',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computingGroupId: 'string',
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

export class ModifyDBInstanceClassResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response data.
   */
  data?: ModifyDBInstanceClassResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * xxx-xxx-xxx
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ModifyDBInstanceClassResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

