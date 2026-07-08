// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ValidateUploadTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * File key.
   * 
   * This parameter is required.
   * 
   * @example
   * Content
   */
  fileKey?: string;
  /**
   * @remarks
   * Task type. Valid values: lightAppSass (SaaS page call) or sdkBatchTask (SDK batch task).
   * 
   * @example
   * lightAppSass
   */
  taskType?: string;
  /**
   * @remarks
   * Template type. Valid values: Content (content asset template) or PositiveSample (positive sample template).
   * 
   * This parameter is required.
   * 
   * @example
   * Content
   */
  templateType?: string;
  /**
   * @remarks
   * Unique identifier of your Alibaba Cloud Model Studio workspace. To get this ID, see [Workspace ID](https://help.aliyun.com/document_detail/2782167.html).
   * 
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

