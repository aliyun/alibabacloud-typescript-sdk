// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRecognizeRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the sensitive field. You can call the [QuerySensNodeInfo](https://help.aliyun.com/document_detail/2747189.html) operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 27f5f5e2-ec60-4567-b1e4-779ac3681024
   */
  sensitiveId?: string;
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
      sensitiveId: 'SensitiveId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sensitiveId: 'string',
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

