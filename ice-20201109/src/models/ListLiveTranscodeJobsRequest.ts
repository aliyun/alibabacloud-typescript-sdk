// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLiveTranscodeJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The search keyword. You can use the job ID or name as the keyword to search for jobs. If you search for jobs by name, fuzzy match is supported.
   * 
   * @example
   * 24ecbb5c-4f98-4194-9400-f17102e27fc5
   */
  keyWord?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 100.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The sorting order. By default, the query results are sorted by creation time in descending order. Valid values:
   * 
   * *   asc
   * *   desc
   * 
   * @example
   * asc
   */
  sortBy?: string;
  /**
   * @remarks
   * The start mode of the transcoding job.
   * 
   * *   0: The transcoding job immediately starts.
   * *   1: The transcoding job starts at the scheduled time.
   * 
   * @example
   * 0
   */
  startMode?: number;
  /**
   * @remarks
   * The state of the job.
   * 
   * 0: The job is not started. 1: The job is in progress. 2: The job is stopped.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The type of the template used by the transcoding job.
   * 
   * *   normal
   * *   narrow-band
   * *   audio-only
   * *   origin
   * 
   * @example
   * normal
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      keyWord: 'KeyWord',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      startMode: 'StartMode',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyWord: 'string',
      pageNo: 'number',
      pageSize: 'number',
      sortBy: 'string',
      startMode: 'number',
      status: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

