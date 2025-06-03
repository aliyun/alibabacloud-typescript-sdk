// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIDEEventDetailResponseBodyEventDetailFileExecutionCommand extends $dara.Model {
  /**
   * @remarks
   * The code in the file of the current version.
   * 
   * @example
   * SHOW TABLES;
   */
  content?: string;
  /**
   * @remarks
   * The name of the data source with which the file is associated.
   * 
   * @example
   * odps_source
   */
  dataSourceName?: string;
  /**
   * @remarks
   * The file ID.
   * 
   * @example
   * 1234123
   */
  fileId?: number;
  /**
   * @remarks
   * The file type. The code for files varies based on the file type. For more information, see [DataWorks nodes](https://help.aliyun.com/document_detail/600169.html).
   * 
   * @example
   * 10
   */
  fileType?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      dataSourceName: 'DataSourceName',
      fileId: 'FileId',
      fileType: 'FileType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      dataSourceName: 'string',
      fileId: 'number',
      fileType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

