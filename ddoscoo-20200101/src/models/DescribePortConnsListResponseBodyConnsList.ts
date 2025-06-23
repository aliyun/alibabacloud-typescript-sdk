// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePortConnsListResponseBodyConnsList extends $dara.Model {
  /**
   * @remarks
   * The number of active connections.
   * 
   * @example
   * 3
   */
  actConns?: number;
  /**
   * @remarks
   * >  This parameter is in internal preview. Do not use this parameter.
   * 
   * @example
   * 8
   */
  conns?: number;
  /**
   * @remarks
   * The number of new connections.
   * 
   * @example
   * 0
   */
  cps?: number;
  /**
   * @remarks
   * The number of inactive connections.
   * 
   * @example
   * 2
   */
  inActConns?: number;
  /**
   * @remarks
   * The index number of the returned data.
   * 
   * @example
   * 16506
   */
  index?: number;
  static names(): { [key: string]: string } {
    return {
      actConns: 'ActConns',
      conns: 'Conns',
      cps: 'Cps',
      inActConns: 'InActConns',
      index: 'Index',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actConns: 'number',
      conns: 'number',
      cps: 'number',
      inActConns: 'number',
      index: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

