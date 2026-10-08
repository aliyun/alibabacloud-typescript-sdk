// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProjectRolesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @example
   * 30001011
   */
  opUserId?: string;
  /**
   * @remarks
   * 项目类型，BASIC-基础模式项目，DEV-开发环境项目，PROD-生产环境项目，TAG-标签平台项目，可选值：BASIC、DEV、PROD、TAG
   * 
   * This parameter is required.
   * 
   * @example
   * DEV
   */
  projectType?: string;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
      projectType: 'ProjectType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      opUserId: 'string',
      projectType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

