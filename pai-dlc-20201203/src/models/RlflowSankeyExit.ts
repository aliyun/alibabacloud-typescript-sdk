// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RLFlowSankeyExit extends $dara.Model {
  /**
   * @remarks
   * The number of trajectories on the outflow edge.
   * 
   * @example
   * 96
   */
  count?: number;
  /**
   * @remarks
   * The key of the outflow source column.
   * 
   * @example
   * DataLoader
   */
  from?: string;
  /**
   * @remarks
   * The index of the outflow source column (0-based).
   * 
   * @example
   * 0
   */
  fromIdx?: number;
  /**
   * @remarks
   * The Chinese name of the outflow destination. Valid values vary by the column where the outflow is located: 在途·未下发 / 在途·生成中 / 在途·待采样 / 在途·待训练.
   * 
   * @example
   * 生成轨迹
   */
  label?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      from: 'From',
      fromIdx: 'FromIdx',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      from: 'string',
      fromIdx: 'number',
      label: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

