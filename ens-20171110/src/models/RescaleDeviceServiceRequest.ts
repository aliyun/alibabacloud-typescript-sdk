// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RescaleDeviceServiceRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required. If you do not specify this parameter, the service returns error code 100001. You can call ListApplications to obtain the application ID. To create an application, call CreateApplication first.
   * 
   * @example
   * 7aedc50b-b1cb-4a7c-9e3d-4cf3c9ee55a4
   */
  appId?: string;
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * m-5rynw9g1ow1e928lb83bqmbnf
   */
  imageId?: string;
  /**
   * @remarks
   * The network type. Valid values:
   * 
   * - **1** (default): Internet
   * 
   * - **2**: internal network
   * 
   * @example
   * 1
   */
  ipType?: number;
  /**
   * @remarks
   * The region level for scaling out resources. Valid values: RegionId (specifies an edge node ID).
   * 
   * This parameter is required.
   * 
   * @example
   * RegionId
   */
  rescaleLevel?: string;
  /**
   * @remarks
   * The resource scaling method. Valid values: Add (provisions new resources).
   * 
   * This parameter is required.
   * 
   * @example
   * Add
   */
  rescaleType?: string;
  /**
   * @remarks
   * The resource specification template information. The value is a string in JSON format.
   * 
   * @example
   * {\\"imageId\\":\\"m-5s4z4c10avgwvwtn33gl2vgob\\",\\"ipType\\":2,\\"specName\\":\\"ens.pfb-c3m7.medium\\"}
   */
  resourceInfo?: string;
  /**
   * @remarks
   * The region requirements for scaling out resources. The value is a string in JSON array format.
   * 
   * This parameter is required.
   * 
   * @example
   * [{\\"regionCode\\": \\"cn-wuxi-telecom_unicom_cmcc-3\\",    \\"ispCode\\": \\"telecom\\",    \\"count\\": 2	},{    \\"regionCode\\": \\"cn-shanghai-cmcc\\",    \\"count\\": 4	}]
   */
  resourceSelector?: string;
  /**
   * @remarks
   * The resource specification name.
   * 
   * @example
   * ens.a6e.large
   */
  resourceSpec?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * @example
   * service-01c6dd6e93f040698566
   */
  serviceId?: string;
  /**
   * @remarks
   * The timeout period for asynchronous resource scaling, in seconds. Default value: 300.
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

