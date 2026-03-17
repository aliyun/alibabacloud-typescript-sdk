// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSmartAGByAccessPointResponseBodySmartAccessGateways extends $dara.Model {
  /**
   * @remarks
   * The ID of the Cloud Connect Network (CCN) instance with which the SAG instance is associated.
   * 
   * @example
   * ccn-l42qf3vpvb****
   */
  associatedCcnId?: string;
  /**
   * @remarks
   * The model of the SAG device with which the SAG instance is associated. Valid values:
   * 
   * *   **sag-1000**.
   * *   **sag-100WM**.
   * 
   * @example
   * sag-1000
   */
  hardwareVersion?: string;
  /**
   * @remarks
   * The method that the SAG instance uses to synchronize Alibaba Cloud-facing routes. Valid values:
   * 
   * *   **static**: static routing.
   * *   **dynamic**: dynamic routing.
   * 
   * @example
   * static
   */
  routingStrategy?: string;
  /**
   * @remarks
   * The description of the SAG instance.
   * 
   * @example
   * test
   */
  smartAGDescription?: string;
  /**
   * @remarks
   * The ID of the SAG instance.
   * 
   * @example
   * sag-p86e06z4geaji1****
   */
  smartAGId?: string;
  /**
   * @remarks
   * The name of the SAG instance.
   * 
   * @example
   * test
   */
  smartAGName?: string;
  /**
   * @remarks
   * The status of the SAG instance. Valid values:
   * 
   * *   **Active**: The SAG device is connected to Alibaba Cloud.
   * *   **offline**: The SAG device is disconnected from Alibaba Cloud.
   * 
   * @example
   * Active
   */
  smartAGStatus?: string;
  static names(): { [key: string]: string } {
    return {
      associatedCcnId: 'AssociatedCcnId',
      hardwareVersion: 'HardwareVersion',
      routingStrategy: 'RoutingStrategy',
      smartAGDescription: 'SmartAGDescription',
      smartAGId: 'SmartAGId',
      smartAGName: 'SmartAGName',
      smartAGStatus: 'SmartAGStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associatedCcnId: 'string',
      hardwareVersion: 'string',
      routingStrategy: 'string',
      smartAGDescription: 'string',
      smartAGId: 'string',
      smartAGName: 'string',
      smartAGStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSmartAGByAccessPointResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * AE203140-5D0C-4B4D-88D1-D008206B3A01
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the SAG instance.
   */
  smartAccessGateways?: ListSmartAGByAccessPointResponseBodySmartAccessGateways[];
  /**
   * @remarks
   * The number of SAG instances within the access point.
   * 
   * @example
   * 16
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      smartAccessGateways: 'SmartAccessGateways',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      smartAccessGateways: { 'type': 'array', 'itemType': ListSmartAGByAccessPointResponseBodySmartAccessGateways },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.smartAccessGateways)) {
      $dara.Model.validateArray(this.smartAccessGateways);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

