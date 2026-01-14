// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGlobalAcceleratorResourcesResponseBodyAssociatedResources extends $dara.Model {
  /**
   * @example
   * ga-bp1odcab8tmno0hdq****
   */
  acceleratorId?: string;
  /**
   * @example
   * Associated
   */
  associatedMode?: string;
  /**
   * @example
   * waf_v2_public_cn-x0r****gr1i
   */
  associatedResourceId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  associatedResourceRegionId?: string;
  /**
   * @example
   * WAF
   */
  associatedResourceType?: string;
  /**
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
  associatedResources?: GetGlobalAcceleratorResourcesResponseBodyAssociatedResources[];
  /**
   * @remarks
   * Id of the request
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

