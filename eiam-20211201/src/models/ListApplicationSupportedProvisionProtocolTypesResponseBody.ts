// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApplicationSupportedProvisionProtocolTypesResponseBodyApplicationSupportedProvisionProtocolType extends $dara.Model {
  /**
   * @remarks
   * The account synchronization protocols that the application supports. Valid values:
   * 
   * - idaas_callback: event callback.
   * 
   * - scim2: System for Cross-domain Identity Management (SCIM) protocol.
   */
  provisionProtocolType?: string[];
  static names(): { [key: string]: string } {
    return {
      provisionProtocolType: 'ProvisionProtocolType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      provisionProtocolType: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.provisionProtocolType)) {
      $dara.Model.validateArray(this.provisionProtocolType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationSupportedProvisionProtocolTypesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The supported synchronization protocols for the application.
   */
  applicationSupportedProvisionProtocolType?: ListApplicationSupportedProvisionProtocolTypesResponseBodyApplicationSupportedProvisionProtocolType;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationSupportedProvisionProtocolType: 'ApplicationSupportedProvisionProtocolType',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationSupportedProvisionProtocolType: ListApplicationSupportedProvisionProtocolTypesResponseBodyApplicationSupportedProvisionProtocolType,
      requestId: 'string',
    };
  }

  validate() {
    if(this.applicationSupportedProvisionProtocolType && typeof (this.applicationSupportedProvisionProtocolType as any).validate === 'function') {
      (this.applicationSupportedProvisionProtocolType as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

