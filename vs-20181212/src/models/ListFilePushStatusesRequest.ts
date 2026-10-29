// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFilePushStatusesRequest extends $dara.Model {
  /**
   * @remarks
   * The start time for the time range filter. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2025-06-23T02:13:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the file, which uniquely identifies the file.
   * 
   * @example
   * f-1671accd4dafdag3er256cvgewt13f7141db2f7
   */
  fileId?: string;
  /**
   * @remarks
   * The name of the file.
   * 
   * @example
   * myfile
   */
  fileName?: string;
  /**
   * @remarks
   * The page number of the list to query. Pages start from 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The Settings for the number of entries per page during paging in a paged query. Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The instance ID of the cloud application service, which is used to query the files installed on the specified instance.
   * 
   * @example
   * render-9f8c57355d224ad7beaf95e145f22111
   */
  renderingInstanceId?: string;
  /**
   * @remarks
   * The start time for the time range filter. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
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

