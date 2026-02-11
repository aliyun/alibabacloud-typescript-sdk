// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeployModelFileRequest extends $dara.Model {
  /**
   * @remarks
   * File Group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 01
   */
  groupId?: number;
  /**
   * @remarks
   * Project ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 01
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'number',
      projectId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

