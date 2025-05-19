// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddMyGroupInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  groupId?: number;
  instances?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      instances: 'Instances',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'number',
      instances: 'string',
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

