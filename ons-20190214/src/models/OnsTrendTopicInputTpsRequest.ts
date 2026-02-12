// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OnsTrendTopicInputTpsRequest extends $dara.Model {
  /**
   * @remarks
   * The timestamp that indicates the beginning of the time range to query. Unit: milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1570852800000
   */
  beginTime?: number;
  /**
   * @remarks
   * The timestamp that indicates the end of the time range to query. Unit: milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1570868400000
   */
  endTime?: number;
  /**
   * @remarks
   * The ID of the instance to which the topic you want to query belongs.
   * 
   * @example
   * MQ_INST_111111111111_DOxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The sampling period. Unit: minutes. Valid values: 1, 5, and 10.
   * 
   * @example
   * 10
   */
  period?: number;
  /**
   * @remarks
   * The name of the topic that you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  topic?: string;
  /**
   * @remarks
   * The type of information that you want to query. Valid values:
   * 
   * *   **0**: the number of messages that are published to the topic during each sampling period.
   * *   **1**: the TPS for message publishing in the topic during each sampling period.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      period: 'Period',
      topic: 'Topic',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      endTime: 'number',
      instanceId: 'string',
      period: 'number',
      topic: 'string',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

