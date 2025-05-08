// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RescaleDeviceServiceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * 7aedc50b-b1cb-4a7c-9e3d-4cf3c9ee55a4
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the image.
   * 
   * @example
   * m-5rynw9g1ow1e928lb83bqmbnf
   */
  imageId?: string;
  /**
   * @remarks
   * The type of the network. The value must be of the enumerated data type. Valid values:
   * 
   * *   **1** (default): Internet
   * *   **2**: internal network
   * 
   * @example
   * 1
   */
  ipType?: number;
  /**
   * @remarks
   * The region level of the scale-out. Set the value to RegionId. RegionId specifies that resource scale-out is performed based on the ID of the edge node.
   * 
   * This parameter is required.
   * 
   * @example
   * RegionId
   */
  rescaleLevel?: string;
  /**
   * @remarks
   * The scaling operation. Set the value to Add to add new resources.
   * 
   * This parameter is required.
   * 
   * @example
   * Add
   */
  rescaleType?: string;
  /**
   * @remarks
   * The information about the resource specification template. The value must be a JSON string.
   * 
   * @example
   * {\\"imageId\\":\\"m-5s4z4c10avgwvwtn33gl2vgob\\",\\"ipType\\":2,\\"specName\\":\\"ens.pfb-c3m7.medium\\"}
   */
  resourceInfo?: string;
  /**
   * @remarks
   * The required resources. The value must be a JSON string.
   * 
   * This parameter is required.
   * 
   * @example
   * [{\\"regionCode\\": \\"cn-wuxi-telecom_unicom_cmcc-3\\",    \\"ispCode\\": \\"telecom\\",    \\"count\\": 2	},{    \\"regionCode\\": \\"cn-shanghai-cmcc\\",    \\"count\\": 4	}]
   */
  resourceSelector?: string;
  /**
   * @remarks
   * The resource specification.
   * 
   * @example
   * ens.a6e.large
   */
  resourceSpec?: string;
  /**
   * @remarks
   * The ID of the service.
   * 
   * @example
   * service-01c6dd6e93f040698566
   */
  serviceId?: string;
  /**
   * @remarks
   * The timeout period for asynchronous scale-out. Unit: seconds. Default value: 300.
   * 
   * @example
   * 1800
   */
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      imageId: 'ImageId',
      ipType: 'IpType',
      rescaleLevel: 'RescaleLevel',
      rescaleType: 'RescaleType',
      resourceInfo: 'ResourceInfo',
      resourceSelector: 'ResourceSelector',
      resourceSpec: 'ResourceSpec',
      serviceId: 'ServiceId',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      imageId: 'string',
      ipType: 'number',
      rescaleLevel: 'string',
      rescaleType: 'string',
      resourceInfo: 'string',
      resourceSelector: 'string',
      resourceSpec: 'string',
      serviceId: 'string',
      timeout: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

