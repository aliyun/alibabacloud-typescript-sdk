// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRepositoryRequestProjectCloneDownloadMethodList extends $dara.Model {
  /**
   * @example
   * true
   */
  allowed?: boolean;
  /**
   * @example
   * project:download
   */
  permissionCode?: string;
  static names(): { [key: string]: string } {
    return {
      allowed: 'allowed',
      permissionCode: 'permissionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowed: 'boolean',
      permissionCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRepositoryRequestProjectCloneDownloadRoleList extends $dara.Model {
  /**
   * @example
   * true
   */
  allowed?: boolean;
  /**
   * @example
   * 15
   */
  roleCode?: number;
  static names(): { [key: string]: string } {
    return {
      allowed: 'allowed',
      roleCode: 'roleCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowed: 'boolean',
      roleCode: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRepositoryRequest extends $dara.Model {
  /**
   * @example
   * c3c09f1230187a879678da43c973d069
   */
  accessToken?: string;
  /**
   * @example
   * Java
   */
  adminSettingLanguage?: string;
  /**
   * @example
   * https://xxxx
   */
  avatar?: string;
  /**
   * @example
   * true
   */
  buildsEnabled?: boolean;
  /**
   * @example
   * true
   */
  checkEmail?: boolean;
  /**
   * @example
   * master
   */
  defaultBranch?: string;
  description?: string;
  /**
   * @example
   * 2080398
   */
  id?: number;
  /**
   * @example
   * true
   */
  issuesEnabled?: boolean;
  /**
   * @example
   * true
   */
  mergeRequestsEnabled?: boolean;
  /**
   * @example
   * codeup
   */
  name?: string;
  /**
   * @example
   * false
   */
  openCloneDownloadControl?: boolean;
  path?: string;
  projectCloneDownloadMethodList?: UpdateRepositoryRequestProjectCloneDownloadMethodList[];
  projectCloneDownloadRoleList?: UpdateRepositoryRequestProjectCloneDownloadRoleList[];
  /**
   * @example
   * false
   */
  snippetsEnabled?: boolean;
  /**
   * @example
   * 0
   */
  visibilityLevel?: number;
  /**
   * @example
   * true
   */
  wikiEnabled?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 60de7a6852743a5162b5f957
   */
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'accessToken',
      adminSettingLanguage: 'adminSettingLanguage',
      avatar: 'avatar',
      buildsEnabled: 'buildsEnabled',
      checkEmail: 'checkEmail',
      defaultBranch: 'defaultBranch',
      description: 'description',
      id: 'id',
      issuesEnabled: 'issuesEnabled',
      mergeRequestsEnabled: 'mergeRequestsEnabled',
      name: 'name',
      openCloneDownloadControl: 'openCloneDownloadControl',
      path: 'path',
      projectCloneDownloadMethodList: 'projectCloneDownloadMethodList',
      projectCloneDownloadRoleList: 'projectCloneDownloadRoleList',
      snippetsEnabled: 'snippetsEnabled',
      visibilityLevel: 'visibilityLevel',
      wikiEnabled: 'wikiEnabled',
      organizationId: 'organizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      adminSettingLanguage: 'string',
      avatar: 'string',
      buildsEnabled: 'boolean',
      checkEmail: 'boolean',
      defaultBranch: 'string',
      description: 'string',
      id: 'number',
      issuesEnabled: 'boolean',
      mergeRequestsEnabled: 'boolean',
      name: 'string',
      openCloneDownloadControl: 'boolean',
      path: 'string',
      projectCloneDownloadMethodList: { 'type': 'array', 'itemType': UpdateRepositoryRequestProjectCloneDownloadMethodList },
      projectCloneDownloadRoleList: { 'type': 'array', 'itemType': UpdateRepositoryRequestProjectCloneDownloadRoleList },
      snippetsEnabled: 'boolean',
      visibilityLevel: 'number',
      wikiEnabled: 'boolean',
      organizationId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.projectCloneDownloadMethodList)) {
      $dara.Model.validateArray(this.projectCloneDownloadMethodList);
    }
    if(Array.isArray(this.projectCloneDownloadRoleList)) {
      $dara.Model.validateArray(this.projectCloneDownloadRoleList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

