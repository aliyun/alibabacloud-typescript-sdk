// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyExternalNodeStatusUpdateRequestOperationRecords extends $dara.Model {
  comment?: string;
  /**
   * @example
   * 2023-05-28 11:33:28
   */
  operateTime?: string;
  operatorName?: string;
  /**
   * @example
   * AGREE
   */
  result?: string;
  /**
   * @example
   * PROCESS_APPROVE
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'comment',
      operateTime: 'operate_time',
      operatorName: 'operator_name',
      result: 'result',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      operateTime: 'string',
      operatorName: 'string',
      result: 'string',
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

