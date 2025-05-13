// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkspacesResponseBodyWorkspaces extends $dara.Model {
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 2025-03-11T08:21:58Z
   */
  createTime?: string;
  /**
   * @remarks
   * 工作空间描述
   * 
   * @example
   * workspace test
   */
  description?: string;
  /**
   * @example
   * workspace-test
   */
  displayName?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 2025-03-11T08:21:58Z
   */
  lastModifyTime?: string;
  /**
   * @remarks
   * 地域ID
   * 
   * @example
   * cn-heyuan
   */
  regionId?: string;
  /**
   * @remarks
   * 工作空间绑定的日志服务项目名称
   * 
   * @example
   * sls-project-test-001
   */
  slsProject?: string;
  /**
   * @remarks
   * 工作空间名称
   * 
   * This parameter is required.
   * 
   * @example
   * workspace-test-001
   */
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      description: 'description',
      displayName: 'displayName',
      lastModifyTime: 'lastModifyTime',
      regionId: 'regionId',
      slsProject: 'slsProject',
      workspaceName: 'workspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      displayName: 'string',
      lastModifyTime: 'string',
      regionId: 'string',
      slsProject: 'string',
      workspaceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

