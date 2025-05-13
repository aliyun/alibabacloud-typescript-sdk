// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutWorkspaceRequest extends $dara.Model {
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
   * 工作空间绑定的日志服务项目名称
   * 
   * This parameter is required.
   * 
   * @example
   * sls-project-test-001
   */
  slsProject?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      displayName: 'displayName',
      slsProject: 'slsProject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      displayName: 'string',
      slsProject: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

