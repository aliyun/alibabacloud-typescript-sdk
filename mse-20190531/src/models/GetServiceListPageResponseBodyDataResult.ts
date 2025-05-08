// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceListPageResponseBodyDataResult extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * dez4xxxxx@f3f75ed8ffxxxxx
   */
  appId?: string;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * example-app
   */
  appName?: string;
  /**
   * @remarks
   * The time when the service was last updated.
   * 
   * @example
   * 123456
   */
  gmtModifyTime?: string;
  /**
   * @remarks
   * The group to which the service belongs.
   * 
   * @example
   * DEFAULT_GROUP
   */
  group?: string;
  /**
   * @remarks
   * The number of service nodes.
   * 
   * @example
   * 1
   */
  instanceNum?: number;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * sc-A
   */
  serviceName?: string;
  serviceType?: string;
  /**
   * @remarks
   * The service version.
   * 
   * @example
   * 1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      gmtModifyTime: 'GmtModifyTime',
      group: 'Group',
      instanceNum: 'InstanceNum',
      serviceName: 'ServiceName',
      serviceType: 'ServiceType',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      gmtModifyTime: 'string',
      group: 'string',
      instanceNum: 'number',
      serviceName: 'string',
      serviceType: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

