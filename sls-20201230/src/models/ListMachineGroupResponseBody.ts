// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMachineGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of machine groups that are returned on the current page.
   * 
   * @example
   * 2
   */
  count?: number;
  /**
   * @remarks
   * The machine groups that meet the query conditions.
   * 
   * @example
   * [ "test-machine-group-1", "test-machine-group-2" ]
   */
  machinegroups?: string[];
  /**
   * @remarks
   * The total number of machine groups that meet the query conditions.
   * 
   * @example
   * 2
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      machinegroups: 'machinegroups',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      machinegroups: { 'type': 'array', 'itemType': 'string' },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.machinegroups)) {
      $dara.Model.validateArray(this.machinegroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

