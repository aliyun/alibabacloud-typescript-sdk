// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceGroupCapabilityRequest extends $dara.Model {
  /**
   * @remarks
   * The resource type.
   * 
   * You can obtain the resource type from the **Resource type** column in [Services that work with Resource Group](https://help.aliyun.com/document_detail/94479.html).
   * 
   * @example
   * instance
   */
  resourceType?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud service.
   * 
   * You can obtain the service code from the **Service code** column in [Services that work with Resource Group](https://help.aliyun.com/document_detail/94479.html).
   * 
   * @example
   * ecs
   */
  service?: string;
  /**
   * @remarks
   * Specifies whether a specific resource type or cloud service supports resource group events.
   * 
   * @example
   * true
   */
  supportResourceGroupEvent?: boolean;
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
      service: 'Service',
      supportResourceGroupEvent: 'SupportResourceGroupEvent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
      service: 'string',
      supportResourceGroupEvent: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

