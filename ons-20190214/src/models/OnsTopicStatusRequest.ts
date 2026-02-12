// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OnsTopicStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance that contains the topic you want to query.
   * 
   * @example
   * MQ_INST_188077086902****_BXSuW61e
   */
  instanceId?: string;
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
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
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

