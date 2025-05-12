// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetListRecordResponseBodyData extends $dara.Model {
  /**
   * @example
   * 16896fa8-37f6-4c70-bb32-67fa9817d426
   */
  analysisId?: string;
  /**
   * @example
   * 2024-12-24 12:02:05
   */
  analysisTime?: string;
  /**
   * @example
   * timeout=2000 ms
   */
  arguments?: string;
  failedLog?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      analysisId: 'analysisId',
      analysisTime: 'analysisTime',
      arguments: 'arguments',
      failedLog: 'failedLog',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysisId: 'string',
      analysisTime: 'string',
      arguments: 'string',
      failedLog: 'string',
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

