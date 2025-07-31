// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AddDataServiceProjectMemberRequestAddCommandProjectMemberList extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xx@aliyuncs.com
   */
  accountName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  displayName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2
   */
  role?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30012011
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      displayName: 'DisplayName',
      role: 'Role',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      displayName: 'string',
      role: 'number',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDataServiceProjectMemberRequestAddCommand extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  projectMemberList?: AddDataServiceProjectMemberRequestAddCommandProjectMemberList[];
  static names(): { [key: string]: string } {
    return {
      projectMemberList: 'ProjectMemberList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectMemberList: { 'type': 'array', 'itemType': AddDataServiceProjectMemberRequestAddCommandProjectMemberList },
    };
  }

  validate() {
    if(Array.isArray(this.projectMemberList)) {
      $dara.Model.validateArray(this.projectMemberList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDataServiceProjectMemberRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  addCommand?: AddDataServiceProjectMemberRequestAddCommand;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 102102
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      addCommand: 'AddCommand',
      opTenantId: 'OpTenantId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addCommand: AddDataServiceProjectMemberRequestAddCommand,
      opTenantId: 'number',
      projectId: 'number',
    };
  }

  validate() {
    if(this.addCommand && typeof (this.addCommand as any).validate === 'function') {
      (this.addCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

