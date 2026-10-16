// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceGroupCapabilityResponseBodyCapabilities extends $dara.Model {
  /**
   * @remarks
   * The resource center resource type code.
   * 
   * @example
   * ACS::ECS::Instance
   */
  resourceCenterResourceType?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * You can obtain the resource type from the **Resource Type** column in [Cloud services that support resource groups](https://help.aliyun.com/document_detail/94479.html).
   * 
   * @example
   * instance
   */
  resourceType?: string;
  /**
   * @remarks
   * The cloud service code.
   * 
   * You can obtain the cloud service code from the **Cloud Service Code** column in [Cloud services that support resource groups](https://help.aliyun.com/document_detail/94479.html).
   * 
   * @example
   * ecs
   */
  service?: string;
  /**
   * @remarks
   * Specifies whether resource group events are supported.
   * 
   * @example
   * true
   */
  supportResourceGroupEvent?: boolean;
  static names(): { [key: string]: string } {
    return {
      resourceCenterResourceType: 'ResourceCenterResourceType',
      resourceType: 'ResourceType',
      service: 'Service',
      supportResourceGroupEvent: 'SupportResourceGroupEvent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceCenterResourceType: 'string',
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

export class ListResourceGroupCapabilityResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of capability items.
   */
  capabilities?: ListResourceGroupCapabilityResponseBodyCapabilities[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2CB870A2-DF0F-5338-8223-F64737FF****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      capabilities: 'Capabilities',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capabilities: { 'type': 'array', 'itemType': ListResourceGroupCapabilityResponseBodyCapabilities },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.capabilities)) {
      $dara.Model.validateArray(this.capabilities);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

