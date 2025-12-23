// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryIpcQuotaRequest extends $dara.Model {
  /**
   * @example
   * understand
   */
  capability?: string;
  /**
   * @example
   * 2025-05-09T08:52:00Z
   */
  endTime?: string;
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 2025-05-08T08:52:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      capability: 'Capability',
      endTime: 'EndTime',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capability: 'string',
      endTime: 'string',
      pageNo: 'number',
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

