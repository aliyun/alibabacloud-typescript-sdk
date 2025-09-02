// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySensClassificationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the template defined by Data Security Guard. You can call the [QueryDefaultTemplate](https://help.aliyun.com/document_detail/2743948.html) operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * e1970541-6cf5-4d23-b101-d5b66f6e1024
   */
  templateId?: string;
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
      templateId: 'TemplateId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateId: 'string',
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

