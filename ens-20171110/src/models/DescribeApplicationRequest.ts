// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application. You can obtain the ID by calling the ListApplications operation.
   * 
   * This parameter is required.
   * 
   * @example
   * a2bac6f4-75dc-455e-8389-2dc8e47526d3
   */
  appId?: string;
  /**
   * @remarks
   * The business service version numbers of the application. Multiple values are supported and separated by commas (,). If you enter All, data of all versions is returned. By default, only data associated with the stable version number is returned.
   * 
   * @example
   * v1,v2
   */
  appVersions?: string;
  /**
   * @remarks
   * The regional statistical level of the application edge resources. Valid values:
   * 
   * - National: nationwide
   * - Big: region
   * - Middle: province
   * - Small: city
   * - RegionId: edge node
   * 
   * Default value: National.
   * 
   * @example
   * National
   */
  level?: string;
  /**
   * @remarks
   * Specifies whether to return information about statistical resource instances and container pods. The value is a JSON string. By default, all information is returned.
   * 
   * @example
   * {\\"appInfo\\":true,\\"detailStat\\": true, \\"appVersionStat\\": true, \\"districtStat\\":true ,\\"instanceStat\\": true, \\"podCountStat\\": true}
   */
  outDetailStatParams?: string;
  /**
   * @remarks
   * The resource filter conditions.
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

