// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteProjectRoleRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * base_role_xxx
   */
  code?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
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

