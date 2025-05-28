// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetTraceResponseBodyDataBrokerInfoOperations } from "./GetTraceResponseBodyDataBrokerInfoOperations";


export class GetTraceResponseBodyDataBrokerInfo extends $dara.Model {
  /**
   * @remarks
   * Delay status.
   * 
   * @example
   * SUCCESS
   */
  delayStatus?: string;
  /**
   * @remarks
   * Operation list.
   */
  operations?: GetTraceResponseBodyDataBrokerInfoOperations[];
  /**
   * @remarks
   * Preset delivery time.
   * 
   * @example
   * 2023-03-22 12:17:08
   */
  presetDelayTime?: string;
  /**
   * @remarks
   * Withdraw scheduled message request result
   * 
   * @example
   * RECALL_OK
   */
  recallResult?: string;
  static names(): { [key: string]: string } {
    return {
      delayStatus: 'delayStatus',
      operations: 'operations',
      presetDelayTime: 'presetDelayTime',
      recallResult: 'recallResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delayStatus: 'string',
      operations: { 'type': 'array', 'itemType': GetTraceResponseBodyDataBrokerInfoOperations },
      presetDelayTime: 'string',
      recallResult: 'string',
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

