// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHistoricalScriptReportShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the query time range, which is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1582103299434
   */
  endTime?: number;
  /**
   * @remarks
   * The ID of the Voice Bot instance.
   * 
   * @example
   * 12f407b22cbe4890ac595f09985848d5
   */
  instanceId?: string;
  /**
   * @remarks
   * The page number to retrieve.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
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
   * A list of up to 100 script IDs.
   */
  scriptIdsShrink?: string;
  /**
   * @remarks
   * The start of the query time range, which is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1582267398628
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      scriptIdsShrink: 'ScriptIds',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      scriptIdsShrink: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

