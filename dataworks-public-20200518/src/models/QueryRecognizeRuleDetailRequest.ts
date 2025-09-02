// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryRecognizeRuleDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the sensitive field. To obtain the name of the sensitive field, call the [QuerySensNodeInfo](https://help.aliyun.com/document_detail/2747189.html) operation or log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Data Category and Sensitivity Level page.
   * 
   * This parameter is required.
   * 
   * @example
   * Name
   */
  sensitiveName?: string;
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
      sensitiveName: 'SensitiveName',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sensitiveName: 'string',
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

