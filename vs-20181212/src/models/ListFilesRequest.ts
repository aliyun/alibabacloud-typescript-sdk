// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFilesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter filters data by time range. It must conform to the ISO 8601 standard and use UTC time in the format yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2021-10-31T06:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * File ID. Each ID corresponds to a unique active file.
   * 
   * @example
   * f-1671accd4dafdag3er256cvgewt13f7141db2f7
   */
  fileId?: string;
  /**
   * @remarks
   * File name.
   * 
   * @example
   * myfile
   */
  fileName?: string;
  /**
   * @remarks
   * The page number to retrieve. Page numbering starts at 1.Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of rows per page for a paged query. The value must be in the range of 1 to 100. The default is 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Start time of the time range filter. Specify in ISO 8601 format using UTC time. Format: yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2021-10-30T16:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      fileId: 'FileId',
      fileName: 'FileName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      fileId: 'string',
      fileName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

