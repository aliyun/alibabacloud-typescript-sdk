// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProjectRequest extends $dara.Model {
  /**
   * @remarks
   * The project name. For information about how to obtain the project name, see [创建项目](https://help.aliyun.com/document_detail/478153.html).
   * 
   * This parameter is required.
   * 
   * @example
   * test-project
   */
  projectName?: string;
  /**
   * @remarks
   * Specifies whether to collect file statistics. Default value: false, which indicates that file statistics are not collected.
   * 
   * - File statistics are collected. The FileCount and TotalFileSize values in the returned Project struct are valid.
   * 
   * - File statistics are not collected. The FileCount and TotalFileSize values in the returned Project struct may be inaccurate or both may be 0.
   * 
   * >Notice: Only files in datasets created before December 20, 2025 can be counted..
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

