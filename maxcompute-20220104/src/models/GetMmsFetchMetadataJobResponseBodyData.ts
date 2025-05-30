// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMmsFetchMetadataJobResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2024-12-16 19:10:07
   */
  endTime?: string;
  /**
   * @example
   * unexpected exception
   */
  errorMsg?: string;
  /**
   * @example
   * 1000002
   */
  id?: number;
  /**
   * @example
   * 5000
   */
  progress?: number;
  /**
   * @example
   * {"databases":5,"tables":75,"partitions":215}
   */
  result?: string;
  /**
   * @example
   * 2000015
   */
  sourceId?: number;
  /**
   * @example
   * 2024-12-16 19:09:37
   */
  startTime?: string;
  /**
   * @example
   * SCAN_DOING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      errorMsg: 'errorMsg',
      id: 'id',
      progress: 'progress',
      result: 'result',
      sourceId: 'sourceId',
      startTime: 'startTime',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      errorMsg: 'string',
      id: 'number',
      progress: 'number',
      result: 'string',
      sourceId: 'number',
      startTime: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

