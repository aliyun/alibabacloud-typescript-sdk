// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAppsResponseBodyAppListAppServiceAreas } from "./DescribeAppsResponseBodyAppListAppServiceAreas";


export class DescribeAppsResponseBodyAppListApp extends $dara.Model {
  /**
   * @example
   * rgf1****"
   */
  appId?: string;
  /**
   * @example
   * Default AppName
   */
  appName?: string;
  /**
   * @example
   * universal
   */
  appType?: string;
  /**
   * @example
   * paybyduration
   */
  billType?: string;
  /**
   * @example
   * 2020-01-09T02:02:29Z
   */
  createTime?: string;
  serviceAreas?: DescribeAppsResponseBodyAppListAppServiceAreas;
  /**
   * @example
   * 1
   */
  status?: number;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      appType: 'AppType',
      billType: 'BillType',
      createTime: 'CreateTime',
      serviceAreas: 'ServiceAreas',
      status: 'Status',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      appType: 'string',
      billType: 'string',
      createTime: 'string',
      serviceAreas: DescribeAppsResponseBodyAppListAppServiceAreas,
      status: 'number',
      version: 'string',
    };
  }

  validate() {
    if(this.serviceAreas && typeof (this.serviceAreas as any).validate === 'function') {
      (this.serviceAreas as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

