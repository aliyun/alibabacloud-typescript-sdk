// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetTraceResponseBodyDataConsumerInfosRecordsOperations } from "./GetTraceResponseBodyDataConsumerInfosRecordsOperations";


export class GetTraceResponseBodyDataConsumerInfosRecords extends $dara.Model {
  /**
   * @remarks
   * Client host.
   * 
   * @example
   * xx.xx.xx.xx
   */
  clientHost?: string;
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
   * Whether to consume fifo.
   * 
   * @example
   * true
   */
  fifoEnable?: boolean;
  /**
   * @remarks
   * Operation list.
   */
  operations?: GetTraceResponseBodyDataConsumerInfosRecordsOperations[];
  /**
   * @remarks
   * POP_CK
   * 
   * @example
   * 123
   */
  popCk?: string;
  /**
   * @remarks
   * Consumer name.
   * 
   * @example
   * test
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      clientHost: 'clientHost',
      consumeStatus: 'consumeStatus',
      fifoEnable: 'fifoEnable',
      operations: 'operations',
      popCk: 'popCk',
      userName: 'userName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientHost: 'string',
      consumeStatus: 'string',
      fifoEnable: 'boolean',
      operations: { 'type': 'array', 'itemType': GetTraceResponseBodyDataConsumerInfosRecordsOperations },
      popCk: 'string',
      userName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.operations)) {
      $dara.Model.validateArray(this.operations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

