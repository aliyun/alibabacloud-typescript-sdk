// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLiveTranscodeJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The search keyword. You can search by job ID or name. Fuzzy match is supported for job names.
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
   * The sort order based on CreateTime. Default value: desc. Valid values:
   * - asc: Ascending order.
   * - desc: Descending order.
   * 
   * @example
   * asc
   */
  sortBy?: string;
  /**
   * @remarks
   * The start mode. Valid values:
   * - 0: Starts immediately.
   * - 1: Starts at a scheduled time.
   * 
   * @example
   * 0
   */
  startMode?: number;
  /**
   * @remarks
   * The job status. Valid values:
   * - 0: Not started.
   * - 1: Running.
   * - 2: Stopped.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The template type corresponding to the transcoding job. Valid values:
   * - normal: Standard template.
   * - narrow-band: Narrowband HD template.
   * - audio-only: Audio-only template.
   * - origin: Original quality template.
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

