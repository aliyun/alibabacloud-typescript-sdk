// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OnsTraceGetResultRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance to which the message you want to query belongs.
   * 
   * @example
   * MQ_INST_111111111111_DOxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the task that was created to query the trace of the message.
   * 
   * This parameter is required.
   * 
   * @example
   * 272967562652883649157096685****
   */
  queryId?: string;
  /**
   * @remarks
   * The topic to which the message belongs.
   * 
   * @example
   * test
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      queryId: 'QueryId',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      queryId: 'string',
      topic: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

