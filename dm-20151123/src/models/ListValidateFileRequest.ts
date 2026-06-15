// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListValidateFileRequest extends $dara.Model {
  /**
   * @remarks
   * The end time. The time is in UTC and follows the RFC 3339 format.
   * 
   * This parameter is required.
   * 
   * @example
   * 2025-12-19T20:30:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * A keyword in the file name.
   * 
   * @example
   * keyword
   */
  fileKeyword?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The start time. The time is in UTC and follows the RFC 3339 format.
   * 
   * This parameter is required.
   * 
   * @example
   * 2025-12-19T08:30:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      fileKeyword: 'FileKeyword',
      page: 'Page',
      pageSize: 'PageSize',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      fileKeyword: 'string',
      page: 'number',
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

