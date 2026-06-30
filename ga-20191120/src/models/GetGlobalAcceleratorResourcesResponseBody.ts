// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGlobalAcceleratorResourcesResponseBodyAssociatedResources extends $dara.Model {
  /**
   * @remarks
   * Instance ID of Alibaba Cloud Global Accelerator (GA).
   * 
   * @example
   * ga-bp1odcab8tmno0hdq****
   */
  acceleratorId?: string;
  /**
   * @remarks
   * Association pattern:  
   * - **Managed**: Managed mode, where GA restricts user operations based on management policies.  
   * - **Associated** (default): Loose coupling association, where GA does not restrict user operations; WAF uses loose coupling.
   * 
   * @example
   * Associated
   */
  associatedMode?: string;
  /**
   * @remarks
   * ID of the linked instance.
   * 
   * @example
   * waf_v2_public_cn-x0r****gr1i
   */
  associatedResourceId?: string;
  /**
   * @remarks
   * Region ID of the linked instance.
   * 
   * @example
   * cn-hangzhou
   */
  associatedResourceRegionId?: string;
  /**
   * @remarks
   * Resource type of the linked instance.
   * 
   * @example
   * WAF
   */
  associatedResourceType?: string;
  /**
   * @remarks
   * Status of the association between the Alibaba Cloud Global Accelerator (GA) instance and other cloud product resources.  
   * 
   * - **active**: The resource is active.  
   * 
   * - **binding**: The resource is being attached.  
   * 
   * - **unBinding**: The resource is being detached.  
   * 
   * - **wafRelease**: The WAF instance has been released.
   * 
   * @example
   * active
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      associatedMode: 'AssociatedMode',
      associatedResourceId: 'AssociatedResourceId',
      associatedResourceRegionId: 'AssociatedResourceRegionId',
      associatedResourceType: 'AssociatedResourceType',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      associatedMode: 'string',
      associatedResourceId: 'string',
      associatedResourceRegionId: 'string',
      associatedResourceType: 'string',
      state: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGlobalAcceleratorResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * List of linked instances.
   */
  associatedResources?: GetGlobalAcceleratorResourcesResponseBodyAssociatedResources[];
  /**
   * @remarks
   * ID of the request
   * 
   * @example
   * DE77A7F3-3B74-41C0-A5BC-CAFD188C28B6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      associatedResources: 'AssociatedResources',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associatedResources: { 'type': 'array', 'itemType': GetGlobalAcceleratorResourcesResponseBodyAssociatedResources },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.associatedResources)) {
      $dara.Model.validateArray(this.associatedResources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

