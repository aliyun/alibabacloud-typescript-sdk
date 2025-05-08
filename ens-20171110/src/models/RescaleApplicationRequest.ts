// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RescaleApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application. You can query the application ID by calling the ListApplications operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 474bdef0-d149-4695-abfb-52912d9143f0
   */
  appId?: string;
  /**
   * @remarks
   * The level of resource scaling. The value is of the enumeration type. Valid values:
   * 
   * *   AreaIspCode (default): scales resources based on the Internet service provider (ISP).
   * *   RegionId: scales resources based on the edge node.
   * *   InstanceId: scales resources based on the instance ID. Resource scale-out specifies resource hosting and scale-in specifies resource release.
   * 
   * Default value: AreaIspCode.
   * 
   * @example
   * RegionId
   */
  rescaleLevel?: string;
  /**
   * @remarks
   * The scaling operation. The value must be of the enumerated data type. Valid values:
   * 
   * *   Add: adds new resources.
   * *   Del: releases resources.
   * 
   * This parameter is required.
   * 
   * @example
   * Add
   */
  rescaleType?: string;
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
   * The timeout period for asynchronous scaling. Unit: seconds. Default value: 300.
   * 
   * @example
   * 1800
   */
  timeout?: number;
  /**
   * @remarks
   * The version number of the application deployment package. By default, the stable version number is used. This parameter takes effect only when you perform resource scale-out.
   * 
   * @example
   * v2
   */
  toAppVersion?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      rescaleLevel: 'RescaleLevel',
      rescaleType: 'RescaleType',
      resourceSelector: 'ResourceSelector',
      timeout: 'Timeout',
      toAppVersion: 'ToAppVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      rescaleLevel: 'string',
      rescaleType: 'string',
      resourceSelector: 'string',
      timeout: 'number',
      toAppVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

