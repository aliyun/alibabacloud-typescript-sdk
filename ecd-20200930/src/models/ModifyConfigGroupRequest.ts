// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyConfigGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the configuration group.
   * 
   * @example
   * ScheduledTask
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
   * 
   * @example
   * ScheduledTask
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
      description: 'Description',
      groupId: 'GroupId',
      name: 'Name',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      groupId: 'string',
      name: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

