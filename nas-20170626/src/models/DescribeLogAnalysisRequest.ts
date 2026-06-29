// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLogAnalysisRequest extends $dara.Model {
  /**
   * @remarks
   * The file system type.
   * 
   * Valid values:
   * 
   * - standard: General-purpose NAS
   * - extreme: Extreme NAS
   * - all (default): all types.
   * 
   * @example
   * all
   */
  fileSystemType?: string;
  /**
   * @remarks
   * The page number of the file system list. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of file systems on each page in a paging query. Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemType: 'FileSystemType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

