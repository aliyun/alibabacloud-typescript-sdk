// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGroupRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test_group
   */
  groupName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test_project
   */
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      projectName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

