// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetTraceResponseBodyDataConsumerInfosDeadLetterInfo } from "./GetTraceResponseBodyDataConsumerInfosDeadLetterInfo";
import { GetTraceResponseBodyDataConsumerInfosRecords } from "./GetTraceResponseBodyDataConsumerInfosRecords";


export class GetTraceResponseBodyDataConsumerInfos extends $dara.Model {
  /**
   * @remarks
   * Consume status.
   * 
   * @example
   * SUCCESS
   */
  consumeStatus?: string;
  /**
   * @remarks
   * The consumer group ID.
   * 
   * @example
   * GID_inspector_group
   */
  consumerGroupId?: string;
  /**
   * @remarks
   * Dead letter info.
   */
  deadLetterInfo?: GetTraceResponseBodyDataConsumerInfosDeadLetterInfo;
  /**
   * @remarks
   * Whether it is a dead letter message.
   * 
   * @example
   * true
   */
  deadMessage?: boolean;
  /**
   * @remarks
   * Consumer record list.
   */
  records?: GetTraceResponseBodyDataConsumerInfosRecords[];
  static names(): { [key: string]: string } {
    return {
      consumeStatus: 'consumeStatus',
      consumerGroupId: 'consumerGroupId',
      deadLetterInfo: 'deadLetterInfo',
      deadMessage: 'deadMessage',
      records: 'records',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumeStatus: 'string',
      consumerGroupId: 'string',
      deadLetterInfo: GetTraceResponseBodyDataConsumerInfosDeadLetterInfo,
      deadMessage: 'boolean',
      records: { 'type': 'array', 'itemType': GetTraceResponseBodyDataConsumerInfosRecords },
    };
  }

  validate() {
    if(this.deadLetterInfo && typeof (this.deadLetterInfo as any).validate === 'function') {
      (this.deadLetterInfo as any).validate();
    }
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

