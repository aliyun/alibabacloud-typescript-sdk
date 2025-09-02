// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDefaultTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The tenant ID. To obtain the tenant ID, perform the following steps: Log on to the [DataWorks console](https://workbench.data.aliyun.com/console). Find your workspace and go to the DataStudio page. On the DataStudio page, click the logon username in the upper-right corner and click User Info in the Menu section.
   * 
   * This parameter is required.
   * 
   * @example
   * 10241024
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

