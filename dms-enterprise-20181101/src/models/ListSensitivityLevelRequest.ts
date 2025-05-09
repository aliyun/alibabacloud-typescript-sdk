// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSensitivityLevelRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the classification template. You can call the [ListClassificationTemplates](https://help.aliyun.com/document_detail/460613.html) operation to query the ID of the classification template.
   * 
   * @example
   * 15**
   */
  templateId?: number;
  /**
   * @remarks
   * The type of the classification template. You can call the [ListClassificationTemplates](https://help.aliyun.com/document_detail/460613.html) operation to query the type of the classification template.
   * 
   * Valid values:
   * 
   * *   USER_DEFINE: a custom template.
   * *   INNER: a built-in template.
   * 
   * @example
   * INNER
   */
  templateType?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * >  To view the ID of the tenant, go to the Data Management (DMS) console and move the pointer over the profile picture in the upper-right corner. For more information, see [View information about the current tenant](https://help.aliyun.com/document_detail/181330.html) in the topic "Manage DMS tenants."
   * 
   * @example
   * 20***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      templateId: 'TemplateId',
      templateType: 'TemplateType',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateId: 'number',
      templateType: 'string',
      tid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

