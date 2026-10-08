// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProjectRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the project. For more information about how to obtain the project name, see [Create a project](https://help.aliyun.com/document_detail/478153.html).
   * 
   * This parameter is required.
   * 
   * @example
   * test-project
   */
  projectName?: string;
  /**
   * @remarks
   * Specifies whether to collect file statistics. Default value: false.
   * - true: File statistics are collected. The FileCount and TotalFileSize fields in the Project struct are accurate and valid.
   * - false: File statistics are not collected. The FileCount and TotalFileSize fields in the Project struct may be inaccurate or both be 0.
   * 
   * >Notice: File statistics are supported only for datasets created before December 20, 2025.
   * 
   * @example
   * true
   */
  withStatistics?: boolean;
  static names(): { [key: string]: string } {
    return {
      projectName: 'ProjectName',
      withStatistics: 'WithStatistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
      withStatistics: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

