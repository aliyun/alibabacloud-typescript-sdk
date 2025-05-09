// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancePackageStatesResponseBodyPackageStates extends $dara.Model {
  /**
   * @remarks
   * Description
   * 
   * @example
   * template description
   */
  description?: string;
  /**
   * @remarks
   * Parameters
   * 
   * @example
   * {}
   */
  parameters?: string;
  /**
   * @remarks
   * Publisher
   * 
   * @example
   * Alibaba Cloud
   */
  publisher?: string;
  /**
   * @remarks
   * Template type
   * 
   * @example
   * Package
   */
  templateCategory?: string;
  /**
   * @remarks
   * Template ID
   * 
   * @example
   * 087b1e11072a40259f6fxxxxxxxxx
   */
  templateId?: string;
  /**
   * @remarks
   * Template name.
   * 
   * @example
   * ACS-ECS-Docker
   */
  templateName?: string;
  /**
   * @remarks
   * Template version number
   * 
   * @example
   * v3
   */
  templateVersion?: string;
  /**
   * @remarks
   * Template version name
   * 
   * @example
   * fix bug
   */
  templateVersionName?: string;
  /**
   * @remarks
   * Update time.
   * 
   * @example
   * 2024-05-04T11:17:28
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      parameters: 'Parameters',
      publisher: 'Publisher',
      templateCategory: 'TemplateCategory',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateVersion: 'TemplateVersion',
      templateVersionName: 'TemplateVersionName',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      parameters: 'string',
      publisher: 'string',
      templateCategory: 'string',
      templateId: 'string',
      templateName: 'string',
      templateVersion: 'string',
      templateVersionName: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

