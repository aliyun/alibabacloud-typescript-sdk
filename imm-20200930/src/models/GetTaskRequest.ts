// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The project name. For information about how to obtain the project name, see [Create a project](https://help.aliyun.com/document_detail/478153.html).
   * 
   * This parameter is required.
   * 
   * @example
   * immtest
   */
  projectName?: string;
  /**
   * @remarks
   * Specifies whether to return the original request parameters used to create the task. Valid values:
   * - true
   * - false (default)
   * 
   * This parameter takes effect only for the following task types:
   * 
   * - MediaConvert
   * - VideoLabelClassification
   * - FaceClustering
   * - FileCompression
   * - ArchiveFileInspection
   * - FileUncompression
   * - PointCloudCompress
   * - ImageToPDF
   * - StoryCreation
   * - LocationDateClustering
   * - ImageSplicing
   * - FacesSearching.
   * 
   * @example
   * true
   */
  requestDefinition?: boolean;
  /**
   * @remarks
   * The ID of the task that you want to query. This value is returned when you create the task.
   * 
   * This parameter is required.
   * 
   * @example
   * FileCompression-2f157087-91df-4fda-8c3e-232407ec*****
   */
  taskId?: string;
  /**
   * @remarks
   * The type of the task. For valid values, see [Task type list](https://help.aliyun.com/document_detail/2743993.html).
   * 
   * This parameter is required.
   * 
   * @example
   * FileCompression
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      projectName: 'ProjectName',
      requestDefinition: 'RequestDefinition',
      taskId: 'TaskId',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
      requestDefinition: 'boolean',
      taskId: 'string',
      taskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

