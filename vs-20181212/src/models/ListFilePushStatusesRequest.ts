// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFilePushStatusesRequest extends $dara.Model {
  /**
   * @remarks
   * A time range filter parameter. Specify the value in ISO8601 format using UTC time: yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2025-06-23T02:13:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The file ID, which uniquely identifies a file.
   * 
   * @example
   * f-1671accd4dafdag3er256cvgewt13f7141db2f7
   */
  fileId?: string;
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * myfile
   */
  fileName?: string;
  /**
   * @remarks
   * The page number of the results to return. Pages start from 1.Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page in a paged query. Valid values: 1 to 100.Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The cloud application service instance ID. Use this parameter to query files installed on a specific instance.
   * 
   * @example
   * render-9f8c57355d224ad7beaf95e145f22111
   */
  renderingInstanceId?: string;
  /**
   * @remarks
   * A time range filter parameter. Specify the value in ISO8601 format using UTC time: yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2025-06-17T12:16:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      fileId: 'FileId',
      fileName: 'FileName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      renderingInstanceId: 'RenderingInstanceId',
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
      renderingInstanceId: 'string',
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

