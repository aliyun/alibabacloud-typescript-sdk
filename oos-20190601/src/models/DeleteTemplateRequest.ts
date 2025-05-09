// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to delete the related executions when a template is deleted.
   * 
   * @example
   * false
   */
  autoDeleteExecutions?: boolean;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the template. The name can be 1 to 200 characters in length and can contain letters, digits, hyphens (-), and underscores (_). It cannot start with ALIYUN, ACS, ALIBABA, or ALICLOUD.
   * 
   * This parameter is required.
   * 
   * @example
   * MyTemplate
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      autoDeleteExecutions: 'AutoDeleteExecutions',
      regionId: 'RegionId',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoDeleteExecutions: 'boolean',
      regionId: 'string',
      templateName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

