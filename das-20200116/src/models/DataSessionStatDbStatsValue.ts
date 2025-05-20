// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DataSessionStatDbStatsValue extends $dara.Model {
  /**
   * @remarks
   * The number of active namespaces.
   * 
   * @example
   * 0
   */
  activeCount?: number;
  /**
   * @remarks
   * The total number of namespaces.
   * 
   * @example
   * 11
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      activeCount: 'ActiveCount',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeCount: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

