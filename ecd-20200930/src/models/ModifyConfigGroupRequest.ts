// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyConfigGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the configuration group.
   * 
   * @example
   * Scheduled task
   */
  description?: string;
  /**
   * @remarks
   * The configuration group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cg-i1ruuudp92qpj****
   */
  groupId?: string;
  /**
   * @remarks
   * The configuration group name.
   * 
   * @example
   * Scheduled task
   */
  name?: string;
  /**
   * @remarks
   * The region ID. This operation is not region-specific. Set this parameter to `cn-shanghai`.
   * 
   * @example
   * cn-shanghai
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

