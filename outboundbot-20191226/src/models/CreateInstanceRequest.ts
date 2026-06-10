// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The list of calling numbers.
   * 
   * > This parameter is optional.
   */
  callingNumber?: string[];
  /**
   * @remarks
   * The description of the instance.
   * 
   * @example
   * 这个是第一的实例
   */
  instanceDescription?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 第一个实例
   */
  instanceName?: string;
  /**
   * @remarks
   * The maximum number of concurrent conversations for the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 4
   */
  maxConcurrentConversation?: number;
  /**
   * @remarks
   * The service type.
   * 
   * > If you do not specify this parameter, the default value is Managed.
   * 
   * - DialogStudio: Conversation Engine 3.0.
   * 
   * - Authorized: A chatbot for the public cloud. This value is used when a public cloud customer purchases a private Intelligent Speech Interaction service and grants authorization. To grant authorization, go to Scenario Management, click Edit, and then select Custom Service in the Invoke Service section.
   * 
   * - Provided: A chatbot for on-premises deployment.
   * 
   * - Managed: The legacy outbound call canvas. This is the default public Intelligent Speech Interaction service for the outbound call product.
   * 
   * @example
   * DialogStudio
   */
  nluServiceType?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * > You can call the ListResourceGroups operation to obtain this ID. For more information, see the Resource Management documentation at https\\://api.aliyun.com/document/ResourceManager/2020-03-31/ListResourceGroups
   * 
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

