// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancePackageStatesResponseBodyPackageStates extends $dara.Model {
  configurationInfo?: string;
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
      configurationInfo: 'ConfigurationInfo',
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
      configurationInfo: 'string',
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

export class ListInstancePackageStatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Page size.
   * 
   * @example
   * 50
   */
  maxResults?: string;
  /**
   * @remarks
   * Token string for pagination.
   * 
   * @example
   * MTRBMDc0NjAtRUJFNy00N0NBLTk3NTctzxxxxxxx
   */
  nextToken?: string;
  /**
   * @remarks
   * List of extensions
   */
  packageStates?: ListInstancePackageStatesResponseBodyPackageStates[];
  /**
   * @remarks
   * ID of the request
   * 
   * @example
   * 1306108F-610C-40FD-AAD5-XXXXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      packageStates: 'PackageStates',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'string',
      nextToken: 'string',
      packageStates: { 'type': 'array', 'itemType': ListInstancePackageStatesResponseBodyPackageStates },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.packageStates)) {
      $dara.Model.validateArray(this.packageStates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

