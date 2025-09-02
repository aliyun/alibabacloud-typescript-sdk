// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEnabledExtensionsForProjectRequest extends $dara.Model {
  /**
   * @remarks
   * The code of the extension point event.
   * 
   * This parameter is required.
   * 
   * @example
   * commit-file
   */
  eventCode?: string;
  /**
   * @remarks
   * The type of the code for the file.
   * 
   * Valid values: 6 (Shell), 10 (ODPS SQL), 11 (ODPS MR), 24 (ODPS Script), 99 (zero load), 221 (PyODPS 2), 225 (ODPS Spark), 227 (EMR Hive), 228 (EMR Spark), 229 (EMR Spark SQL), 230 (EMR MR), 239 (OSS object inspection), 257 (EMR Shell), 258 (EMR Spark Shell), 259 (EMR Presto), 260 (EMR Impala), 900 (real-time synchronization), 1089 (cross-tenant collaboration), 1091 (Hologres development), 1093 (Hologres SQL), 1100 (assignment), and 1221 (PyODPS 3).
   * 
   * You can call the [ListFileType](https://help.aliyun.com/document_detail/212428.html) operation to query the type of the code for the file.
   * 
   * @example
   * 10
   */
  fileType?: string;
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console?spm=a2c4g.11186623.0.0.6b4d4941azHd2k) and go to the Workspace page to obtain the workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      eventCode: 'EventCode',
      fileType: 'FileType',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventCode: 'string',
      fileType: 'string',
      projectId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

