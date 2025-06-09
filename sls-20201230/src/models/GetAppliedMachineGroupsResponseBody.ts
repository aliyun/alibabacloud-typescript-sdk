// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAppliedMachineGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of returned machine groups.
   * 
   * @example
   * 2
   */
  count?: number;
  /**
   * @remarks
   * The names of the returned machine groups.
   * 
   * @example
   * [ "sample-group1","sample-group2" ]
   */
  machinegroups?: string[];
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      machinegroups: 'machinegroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      machinegroups: { 'type': 'array', 'itemType': 'string' },
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

