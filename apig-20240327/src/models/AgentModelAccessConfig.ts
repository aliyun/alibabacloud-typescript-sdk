// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AgentModelAccessConfig extends $dara.Model {
  /**
   * @remarks
   * The list of consumer IDs that represent the Agent to access the Model API. The Model API ID and consumer ID together identify the Agent identity, and the configuration takes effect for all current and future routes of the Model API. Specify at least one consumer. The consumer must be enabled and must have direct Consumer authorization for the Model API in the default environment of the target gateway, with the authorization publish status being Success. Different Agents cannot bind the same consumer to the same Model API. ConsumerGroup is not supported.
   * 
   * This parameter is required.
   */
  consumerIds?: string[];
  /**
   * @remarks
   * The ID of the Model API to associate. The Model API must belong to the specified gateway.
   * 
   * This parameter is required.
   * 
   * @example
   * model-api-1
   */
  modelApiId?: string;
  static names(): { [key: string]: string } {
    return {
      consumerIds: 'consumerIds',
      modelApiId: 'modelApiId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerIds: { 'type': 'array', 'itemType': 'string' },
      modelApiId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.consumerIds)) {
      $dara.Model.validateArray(this.consumerIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

