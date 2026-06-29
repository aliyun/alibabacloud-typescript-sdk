// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QuestionPlugin } from "./QuestionPlugin";
import { ViewPlugin } from "./ViewPlugin";


export class TemplateDTOViewConfigs extends $dara.Model {
  /**
   * @remarks
   * List of view widgets
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

export class TemplateDTO extends $dara.Model {
  /**
   * @remarks
   * Template categorization
   * 
   * @example
   * picture
   */
  classify?: string;
  /**
   * @remarks
   * Template description
   * 
   * @example
   * demo
   */
  description?: string;
  /**
   * @remarks
   * Template additional information
   * 
   * @example
   * false
   */
  exif?: { [key: string]: any };
  /**
   * @remarks
   * List of question widget configurations
   * 
   * This parameter is required.
   */
  questionConfigs?: QuestionPlugin[];
  /**
   * @remarks
   * List of assisted annotation configurations
   */
  robotConfigs?: { [key: string]: any }[];
  /**
   * @remarks
   * Template shared mode
   * 
   * @example
   * true
   */
  sharedMode?: string;
  /**
   * @remarks
   * List of tag information
   */
  tags?: string[];
  /**
   * @remarks
   * Template ID
   * 
   * @example
   * 1529***48342353920
   */
  templateId?: string;
  /**
   * @remarks
   * Template Name
   * 
   * This parameter is required.
   * 
   * @example
   * demo
   */
  templateName?: string;
  /**
   * @remarks
   * View layer configuration
   * 
   * This parameter is required.
   */
  viewConfigs?: TemplateDTOViewConfigs;
  static names(): { [key: string]: string } {
    return {
      classify: 'Classify',
      description: 'Description',
      exif: 'Exif',
      questionConfigs: 'QuestionConfigs',
      robotConfigs: 'RobotConfigs',
      sharedMode: 'SharedMode',
      tags: 'Tags',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      viewConfigs: 'ViewConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classify: 'string',
      description: 'string',
      exif: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      questionConfigs: { 'type': 'array', 'itemType': QuestionPlugin },
      robotConfigs: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      sharedMode: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
      templateId: 'string',
      templateName: 'string',
      viewConfigs: TemplateDTOViewConfigs,
    };
  }

  validate() {
    if(this.exif) {
      $dara.Model.validateMap(this.exif);
    }
    if(Array.isArray(this.questionConfigs)) {
      $dara.Model.validateArray(this.questionConfigs);
    }
    if(Array.isArray(this.robotConfigs)) {
      $dara.Model.validateArray(this.robotConfigs);
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

