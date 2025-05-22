// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the template. The maximum length is 256 characters.
   * 
   * @example
   * It is a demo.
   */
  description?: string;
  /**
   * @remarks
   * Whether to update the Draft (draft) version. Values:
   * - false (default): If template content is provided, a new version is created, and the Draft version is cleared. Otherwise, the current latest version is modified.
   * - true: Modifies the Draft version. The Draft version can only be retrieved via the GetTemplate interface. The ListTemplateVersions interface will not return it. The TemplateVersion parameter in other interfaces cannot specify Draft.
   * 
   * @example
   * false
   */
  isDraft?: boolean;
  /**
   * @remarks
   * Template version rotation strategy. Values:
   * - None (default): No rotation. An error occurs when the version limit is reached.
   * - DeleteOldestNonSharedVersionWhenLimitExceeded: Rotates and deletes non-shared template versions.
   * > 
   * > - If all versions of the template are shared, they cannot be rotated and deleted.
   * > - The current latest version will not be rotated and deleted.
   * > - Regardless of whether rotation deletion is used, the template version number cannot exceed v65000.
   * 
   * @example
   * None
   */
  rotateStrategy?: string;
  /**
   * @remarks
   * The structure of the template body. The length should be between 1 and 524,288 bytes. If the content is long, it is recommended to use HTTP POST + Body Param to pass the parameter in the request body to avoid request failure due to an overly long URL.
   * 
   * > You must and can only specify one of `TemplateBody`, `TemplateURL`, `TemplateId`, or `TemplateScratchId`.
   * 
   * @example
   * {"ROSTemplateFormatVersion":"2015-09-01"}
   */
  templateBody?: string;
  /**
   * @remarks
   * The template ID. Supports both shared and private templates.
   * 
   * This parameter is required.
   * 
   * @example
   * 5ecd1e10-b0e9-4389-a565-e4c15efc****
   */
  templateId?: string;
  /**
   * @remarks
   * The name of the template.  
   * The length should not exceed 255 characters (utf-8 encoding), and it must start with a number, letter, or Chinese character. It can include numbers, letters, Chinese characters, hyphens (-), and underscores (_).
   * 
   * @example
   * MyTemplate
   */
  templateName?: string;
  /**
   * @remarks
   * The location of the file containing the template body. The URL must point to a template located on a web server (HTTP or HTTPS) or in an Alibaba Cloud OSS bucket (e.g., oss://ros/template/demo, oss://ros/template/demo?RegionId=cn-hangzhou), with a maximum size of 524,288 bytes.   
   * 
   * > If the OSS region is not specified, it defaults to the same as the `RegionId` parameter in the request.
   *    
   * You can only specify one of `TemplateBody` or `TemplateURL`.   
   * The maximum length of the URL is 1,024 bytes.
   * 
   * @example
   * oss://ros/template/demo
   */
  templateURL?: string;
  /**
   * @remarks
   * Validation options.
   * 
   * By default, no options are enabled, and strict validation is performed.
   */
  validationOptions?: string[];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      isDraft: 'IsDraft',
      rotateStrategy: 'RotateStrategy',
      templateBody: 'TemplateBody',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateURL: 'TemplateURL',
      validationOptions: 'ValidationOptions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      isDraft: 'boolean',
      rotateStrategy: 'string',
      templateBody: 'string',
      templateId: 'string',
      templateName: 'string',
      templateURL: 'string',
      validationOptions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.validationOptions)) {
      $dara.Model.validateArray(this.validationOptions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

