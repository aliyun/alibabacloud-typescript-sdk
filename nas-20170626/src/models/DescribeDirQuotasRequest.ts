// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDirQuotasRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the file system.
   * 
   * This parameter is required.
   * 
   * @example
   * 1ca404****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The page number.
   * 
   * Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * Valid values: 1 to 100.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The absolute path of a directory.
   * 
   * If you do not specify this parameter, all directories for which quotas are created are returned.
   * 
   * @example
   * /data/sub1
   */
  path?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      path: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

