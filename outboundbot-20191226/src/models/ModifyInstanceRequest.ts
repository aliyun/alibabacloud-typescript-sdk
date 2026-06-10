// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * A list of calling numbers.
   * 
   * > This parameter is optional.
   * 
   * @example
   * ["95187"]
   */
  callingNumber?: string[];
  /**
   * @remarks
   * The description of the instance.
   * 
   * @example
   * 这是新的实例
   */
  instanceDescription?: string;
  /**
   * @remarks
   * The ID of the Outbound Bot instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 90515b5-6115-4ccf-83e2-52d5bfaf2ddf
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * 新实例
   */
  instanceName?: string;
  /**
   * @remarks
   * The maximum number of concurrent conversations.
   * 
   * This parameter is required.
   * 
   * @example
   * 5
   */
  maxConcurrentConversation?: number;
  static names(): { [key: string]: string } {
    return {
      callingNumber: 'CallingNumber',
      instanceDescription: 'InstanceDescription',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      maxConcurrentConversation: 'MaxConcurrentConversation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callingNumber: { 'type': 'array', 'itemType': 'string' },
      instanceDescription: 'string',
      instanceId: 'string',
      instanceName: 'string',
      maxConcurrentConversation: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.callingNumber)) {
      $dara.Model.validateArray(this.callingNumber);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

