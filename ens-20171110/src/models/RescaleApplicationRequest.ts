// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RescaleApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID. You can obtain this value by calling the ListApplications operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 474bdef0-d149-4695-abfb-52912d9143f0
   */
  appId?: string;
  /**
   * @remarks
   * The level of the scaling region. Valid values:
   * 
   * - AreaIspCode: region ISP.
   * - RegionId: edge zone.
   * - InstanceId: instance. Scale-out indicates resource hosting. Scale-in indicates resource release.
   * 
   * Default value: AreaIspCode.
   * 
   * @example
   * RegionId
   */
  rescaleLevel?: string;
  /**
   * @remarks
   * The scaling action for resources. Valid values:
   * - Add: Provisions new resources.
   * - Del: Releases resources.
   * 
   * This parameter is required.
   * 
   * @example
   * Add
   */
  rescaleType?: string;
  /**
   * @remarks
   * The scaling resource requirements. The value is a string in JSON array format.
   * 
   * This parameter is required.
   * 
   * @example
   * [{\\"regionCode\\": \\"cn-wuxi-telecom_unicom_cmcc-3\\",    \\"ispCode\\": \\"telecom\\",    \\"count\\": 2	},{    \\"regionCode\\": \\"cn-shanghai-cmcc\\",    \\"count\\": 4	}]
   */
  resourceSelector?: string;
  /**
   * @remarks
   * The timeout period for asynchronous scaling, in seconds. Default value: 300.
   * 
   * @example
   * 1800
   */
  timeout?: number;
  /**
   * @remarks
   * The application deployment version for new resources. This parameter takes effect only when resources are added. Default value: the stable version number of the application.
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

