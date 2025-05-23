// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIDEEventDetailResponseBodyEventDetailFileExecutionCommand extends $dara.Model {
  /**
   * @example
   * SHOW TABLES;
   */
  content?: string;
  /**
   * @example
   * odps_source
   */
  dataSourceName?: string;
  /**
   * @example
   * 1234123
   */
  fileId?: number;
  /**
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

