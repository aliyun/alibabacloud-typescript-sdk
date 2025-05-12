// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyTimerGroupRequestConfigTimers } from "./ModifyTimerGroupRequestConfigTimers";


export class ModifyTimerGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The scheduled task groups.
   */
  configTimers?: ModifyTimerGroupRequestConfigTimers[];
  /**
   * @remarks
   * The description of the configuration group.
   */
  description?: string;
  /**
   * @remarks
   * The ID of the configuration group.
   * 
   * This parameter is required.
   * 
   * @example
   * cg-i1ruuudp92qpj****
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the configuration group.
   */
  name?: string;
  /**
   * @remarks
   * The ID of the region. Set the value to `cn-shanghai`.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      configTimers: 'ConfigTimers',
      description: 'Description',
      groupId: 'GroupId',
      name: 'Name',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configTimers: { 'type': 'array', 'itemType': ModifyTimerGroupRequestConfigTimers },
      description: 'string',
      groupId: 'string',
      name: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.configTimers)) {
      $dara.Model.validateArray(this.configTimers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

