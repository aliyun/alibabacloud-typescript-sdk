// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application. You can call the ListApplications operation to obtain the application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * a2bac6f4-75dc-455e-8389-2dc8e47526d3
   */
  appId?: string;
  /**
   * @remarks
   * The version number of the application. Separate multiple version numbers with commas (,). If you want to query data of all versions of applications, specify All for this parameter. By default, only data of applications in the stable versions are queried.
   * 
   * @example
   * v1,v2
   */
  appVersions?: string;
  /**
   * @remarks
   * The region level by which edge resources of the application are collected. The value is of the enumeration type. Valid values:
   * 
   * *   National: Chinese mainland
   * *   Big: area
   * *   Middle: province
   * *   Small: city
   * *   RegionId: edge node
   * 
   * Default value: National.
   * 
   * @example
   * National
   */
  level?: string;
  /**
   * @remarks
   * Specifies whether to return other information about the application, such as statistics on resource instances and pods. The value must be a JSON string. By default, all information is returned.
   * 
   * @example
   * {\\"appInfo\\":true,\\"detailStat\\": true, \\"appVersionStat\\": true, \\"districtStat\\":true ,\\"instanceStat\\": true, \\"podCountStat\\": true}
   */
  outDetailStatParams?: string;
  /**
   * @remarks
   * The resource filtering condition.
   * 
   * @example
   * [{\\"regionCode\\": \\"cn-wuxi-telecom_unicom_cmcc-3\\",    \\"ispCode\\": \\"telecom\\",    \\"count\\": 2	},{    \\"regionCode\\": \\"cn-shanghai-cmcc\\",    \\"count\\": 4	}]
   */
  resourceSelector?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appVersions: 'AppVersions',
      level: 'Level',
      outDetailStatParams: 'OutDetailStatParams',
      resourceSelector: 'ResourceSelector',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appVersions: 'string',
      level: 'string',
      outDetailStatParams: 'string',
      resourceSelector: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

