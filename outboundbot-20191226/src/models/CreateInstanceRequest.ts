// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInstanceRequest extends $dara.Model {
  callingNumber?: string[];
  instanceDescription?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4
   */
  maxConcurrentConversation?: number;
  /**
   * @example
   * Provided
   */
  nluServiceType?: string;
  /**
   * @example
   * rg-acfmwd4qr3z773y
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      callingNumber: 'CallingNumber',
      instanceDescription: 'InstanceDescription',
      instanceName: 'InstanceName',
      maxConcurrentConversation: 'MaxConcurrentConversation',
      nluServiceType: 'NluServiceType',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callingNumber: { 'type': 'array', 'itemType': 'string' },
      instanceDescription: 'string',
      instanceName: 'string',
      maxConcurrentConversation: 'number',
      nluServiceType: 'string',
      resourceGroupId: 'string',
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

