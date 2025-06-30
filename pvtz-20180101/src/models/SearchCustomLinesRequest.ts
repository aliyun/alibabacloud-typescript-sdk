// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchCustomLinesRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range during which the custom lines are created to query. Set the time to a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1672136518234
   */
  createTimestampEnd?: number;
  /**
   * @remarks
   * The beginning of the time range during which the custom lines are created to query. Set the time to a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1672136518123
   */
  createTimestampStart?: number;
  /**
   * @remarks
   * The IDs of the creators for the custom lines.
   */
  creator?: string[];
  /**
   * @remarks
   * The IPv4 address.
   * 
   * @example
   * 1.1.1.1
   */
  ipv4?: string;
  /**
   * @remarks
   * The language.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The name of the custom line.
   */
  name?: string;
  /**
   * @remarks
   * The page number. Pages start from page **1**. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: **1 to 100**. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The end of the time range during which the custom lines are updated to query. Set the time to a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1672136518000
   */
  updateTimestampEnd?: number;
  /**
   * @remarks
   * The beginning of the time range during which the custom lines are updated to query. Set the time to a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1672136515000
   */
  updateTimestampStart?: number;
  static names(): { [key: string]: string } {
    return {
      createTimestampEnd: 'CreateTimestampEnd',
      createTimestampStart: 'CreateTimestampStart',
      creator: 'Creator',
      ipv4: 'Ipv4',
      lang: 'Lang',
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      updateTimestampEnd: 'UpdateTimestampEnd',
      updateTimestampStart: 'UpdateTimestampStart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTimestampEnd: 'number',
      createTimestampStart: 'number',
      creator: { 'type': 'array', 'itemType': 'string' },
      ipv4: 'string',
      lang: 'string',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      updateTimestampEnd: 'number',
      updateTimestampStart: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.creator)) {
      $dara.Model.validateArray(this.creator);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

