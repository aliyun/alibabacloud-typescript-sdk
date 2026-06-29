// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TaskTemplateOptionConfig } from "./TaskTemplateOptionConfig";


export class TaskTemplateConfig extends $dara.Model {
  /**
   * @remarks
   * Additional information for template configuration.
   */
  exif?: { [key: string]: string };
  /**
   * @remarks
   * Display field corresponding to the View.
   * 
   * @example
   * url
   */
  resourceKey?: string;
  /**
   * @remarks
   * List of questions in the template.
   */
  selectQuestions?: string[];
  /**
   * @remarks
   * Template options configuration.
   */
  templateOptionMap?: { [key: string]: TaskTemplateOptionConfig };
  /**
   * @remarks
   * Template ID on which this depends.
   * 
   * @example
   * 154***2391839854592
   */
  templateRelationId?: string;
  static names(): { [key: string]: string } {
    return {
      exif: 'Exif',
      resourceKey: 'ResourceKey',
      selectQuestions: 'SelectQuestions',
      templateOptionMap: 'TemplateOptionMap',
      templateRelationId: 'TemplateRelationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exif: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      resourceKey: 'string',
      selectQuestions: { 'type': 'array', 'itemType': 'string' },
      templateOptionMap: { 'type': 'map', 'keyType': 'string', 'valueType': TaskTemplateOptionConfig },
      templateRelationId: 'string',
    };
  }

  validate() {
    if(this.exif) {
      $dara.Model.validateMap(this.exif);
    }
    if(Array.isArray(this.selectQuestions)) {
      $dara.Model.validateArray(this.selectQuestions);
    }
    if(this.templateOptionMap) {
      $dara.Model.validateMap(this.templateOptionMap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

