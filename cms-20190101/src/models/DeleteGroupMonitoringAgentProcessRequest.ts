// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteGroupMonitoringAgentProcessRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application group.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  groupId?: string;
  /**
   * @remarks
   * The ID of the process monitoring task.
   * 
   * This parameter is required.
   * 
   * @example
   * 48F83746-C817-478C-9B06-7158F56B****
   */
  id?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      id: 'Id',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      id: 'string',
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

