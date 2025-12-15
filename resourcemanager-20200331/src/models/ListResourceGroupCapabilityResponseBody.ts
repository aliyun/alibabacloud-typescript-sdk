// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceGroupCapabilityResponseBodyCapabilities extends $dara.Model {
  /**
   * @example
   * instance
   */
  resourceType?: string;
  /**
   * @example
   * ecs
   */
  service?: string;
  /**
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

export class ListResourceGroupCapabilityResponseBody extends $dara.Model {
  capabilities?: ListResourceGroupCapabilityResponseBodyCapabilities[];
  /**
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

