// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ValidateUploadTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Content
   */
  fileKey?: string;
  /**
   * @example
   * lightAppSass
   */
  taskType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Content
   */
  templateType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      fileKey: 'FileKey',
      taskType: 'TaskType',
      templateType: 'TemplateType',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileKey: 'string',
      taskType: 'string',
      templateType: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

