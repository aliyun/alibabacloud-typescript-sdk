// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitDataServiceApiRequest extends $dara.Model {
  /**
   * @remarks
   * The API ID. You can call the [ListDataServiceApis](~~ListDataServiceApis~~) operation to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  apiId?: number;
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to obtain the workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * The tenant ID. To obtain the tenant ID, perform the following steps: Log on to the DataWorks console. Find your workspace and go to the [DataService Studio](https://ds-cn-shanghai.data.aliyun.com/) page. On the DataService Studio page, click the logon username in the upper-right corner and click User Info in the Menu section.
   * 
   * @example
   * 10001
   */
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      projectId: 'ProjectId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'number',
      projectId: 'number',
      tenantId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

