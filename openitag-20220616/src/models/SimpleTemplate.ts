// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SimpleTemplate extends $dara.Model {
  /**
   * @remarks
   * Reasons for template deprecation
   * 
   * @example
   * ["无效"]
   */
  abandonReasons?: string;
  /**
   * @remarks
   * Template description
   * 
   * @example
   * 图片分割的模板
   */
  description?: string;
  /**
   * @remarks
   * Creation Time
   * 
   * @example
   * 2022-07-12 14:21:08
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * Update Time
   * 
   * @example
   * 2022-07-12 14:21:08
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * Is shared
   * 
   * @example
   * ALL
   */
  sharedMode?: string;
  /**
   * @remarks
   * Status
   * 
   * @example
   * DRAFT
   */
  status?: string;
  /**
   * @remarks
   * List of tags
   */
  tags?: string[];
  /**
   * @remarks
   * Template ID
   * 
   * @example
   * 154***1431673270272
   */
  templateId?: string;
  /**
   * @remarks
   * Template Name
   * 
   * @example
   * 图片分割组合77aa
   */
  templateName?: string;
  /**
   * @remarks
   * Tenant ID of the template
   * 
   * @example
   * GA***W134
   */
  tenantId?: string;
  /**
   * @remarks
   * Type
   * 
   * @example
   * CUSTOM
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      abandonReasons: 'AbandonReasons',
      description: 'Description',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      sharedMode: 'SharedMode',
      status: 'Status',
      tags: 'Tags',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      tenantId: 'TenantId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abandonReasons: 'string',
      description: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      sharedMode: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
      templateId: 'string',
      templateName: 'string',
      tenantId: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

