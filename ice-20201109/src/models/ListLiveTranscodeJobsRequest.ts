// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLiveTranscodeJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The search keyword. You can search by task ID or name. Name supports fuzzy match.
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
   * The sort order. Sorts by CreateTime. Default value: desc.
   * 
   * - asc: ascending order
   * - desc: descending order
   * 
   * @example
   * asc
   */
  sortBy?: string;
  /**
   * @remarks
   * The start mode.
   * 
   * - 0: start immediately
   * - 1: scheduled start
   * 
   * @example
   * 0
   */
  startMode?: number;
  /**
   * @remarks
   * The task status.
   * 
   * - 0: not started
   * 
   * - 1: running
   * 
   * - 2: stopped
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The template type corresponding to the transcoding task.
   * 
   * - normal: standard
   * - narrow-band: narrow bandwidth high definition
   * - audio-only: audio only
   * - origin: original quality
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

