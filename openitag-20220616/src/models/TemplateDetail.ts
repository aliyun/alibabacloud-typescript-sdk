// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SimpleUser } from "./SimpleUser";
import { QuestionPlugin } from "./QuestionPlugin";
import { ViewPlugin } from "./ViewPlugin";


export class TemplateDetailViewConfigs extends $dara.Model {
  /**
   * @remarks
   * View widgets.
   */
  viewPlugins?: ViewPlugin[];
  static names(): { [key: string]: string } {
    return {
      viewPlugins: 'ViewPlugins',
    };
  }

  static types(): { [key: string]: any } {
    return {
      viewPlugins: { 'type': 'array', 'itemType': ViewPlugin },
    };
  }

  validate() {
    if(Array.isArray(this.viewPlugins)) {
      $dara.Model.validateArray(this.viewPlugins);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TemplateDetail extends $dara.Model {
  /**
   * @remarks
   * Reasons for deprecation.
   */
  abandonReasons?: string[];
  /**
   * @remarks
   * Template categorization.
   * 
   * @example
   * picture
   */
  classify?: string;
  /**
   * @remarks
   * Creator.
   */
  creator?: SimpleUser;
  /**
   * @remarks
   * Template description.
   * 
   * @example
   * demo
   */
  description?: string;
  /**
   * @remarks
   * Additional template information.
   * 
   * @example
   * false
   */
  exif?: { [key: string]: any };
  /**
   * @remarks
   * Creation Time.
   * 
   * @example
   * 2021-07-07 16:09:20
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * Updated At.
   * 
   * @example
   * 2021-07-07 16:09:20
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * Modifier.
   */
  modifier?: SimpleUser;
  /**
   * @remarks
   * Question widget configuration.
   */
  questionConfigs?: QuestionPlugin[];
  /**
   * @remarks
   * Template shared mode.
   * 
   * @example
   * true
   */
  sharedMode?: string;
  /**
   * @remarks
   * Template status.
   * 
   * @example
   * CREATED
   */
  status?: string;
  /**
   * @remarks
   * Label information.
   */
  tags?: string[];
  /**
   * @remarks
   * Template ID.
   * 
   * @example
   * 1529***48342353920
   */
  templateId?: string;
  /**
   * @remarks
   * Template Name.
   * 
   * @example
   * demo
   */
  templateName?: string;
  /**
   * @remarks
   * Tenant where the template resides.
   * 
   * @example
   * GA***W134
   */
  tenantId?: string;
  /**
   * @remarks
   * Template type.
   * 
   * @example
   * picture
   */
  type?: string;
  /**
   * @remarks
   * View layer configuration.
   */
  viewConfigs?: TemplateDetailViewConfigs;
  static names(): { [key: string]: string } {
    return {
      abandonReasons: 'AbandonReasons',
      classify: 'Classify',
      creator: 'Creator',
      description: 'Description',
      exif: 'Exif',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      modifier: 'Modifier',
      questionConfigs: 'QuestionConfigs',
      sharedMode: 'SharedMode',
      status: 'Status',
      tags: 'Tags',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      tenantId: 'TenantId',
      type: 'Type',
      viewConfigs: 'ViewConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abandonReasons: { 'type': 'array', 'itemType': 'string' },
      classify: 'string',
      creator: SimpleUser,
      description: 'string',
      exif: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      modifier: SimpleUser,
      questionConfigs: { 'type': 'array', 'itemType': QuestionPlugin },
      sharedMode: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
      templateId: 'string',
      templateName: 'string',
      tenantId: 'string',
      type: 'string',
      viewConfigs: TemplateDetailViewConfigs,
    };
  }

  validate() {
    if(Array.isArray(this.abandonReasons)) {
      $dara.Model.validateArray(this.abandonReasons);
    }
    if(this.creator && typeof (this.creator as any).validate === 'function') {
      (this.creator as any).validate();
    }
    if(this.exif) {
      $dara.Model.validateMap(this.exif);
    }
    if(this.modifier && typeof (this.modifier as any).validate === 'function') {
      (this.modifier as any).validate();
    }
    if(Array.isArray(this.questionConfigs)) {
      $dara.Model.validateArray(this.questionConfigs);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(this.viewConfigs && typeof (this.viewConfigs as any).validate === 'function') {
      (this.viewConfigs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

