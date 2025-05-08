// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEurekaInstancesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * CONTACTINFO
   */
  app?: string;
  /**
   * @remarks
   * The timeout period of the instance.\\
   * After the specified timeout period expires, the service is unavailable by default and is deleted.
   * 
   * @example
   * 90
   */
  durationInSecs?: number;
  /**
   * @remarks
   * The URL of the homepage.
   * 
   * @example
   * http://30.5.XX.XX:8091/
   */
  homePageUrl?: string;
  /**
   * @remarks
   * The hostname.
   * 
   * @example
   * 30.5.XX.XX
   */
  hostName?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * L-PC1A6A28-****.hz.ali.com:contactinfo:8091
   */
  instanceId?: string;
  /**
   * @remarks
   * The IP address.
   * 
   * @example
   * 30.5.XX.XX
   */
  ipAddr?: string;
  /**
   * @remarks
   * The time when the instance was last modified.
   * 
   * @example
   * 20201009115543
   */
  lastDirtyTimestamp?: number;
  /**
   * @remarks
   * The time when the instance heartbeat was last checked.
   * 
   * @example
   * 20201010071203
   */
  lastUpdatedTimestamp?: number;
  /**
   * @remarks
   * The metadata.
   * 
   * @example
   * [string]
   */
  metadata?: { [key: string]: any };
  /**
   * @remarks
   * The service port number.
   * 
   * @example
   * 8091
   */
  port?: number;
  /**
   * @remarks
   * The maximum interval between two heartbeat checks after a heartbeat check times out.\\
   * Default value: 10.
   * 
   * @example
   * 10
   */
  renewalIntervalInSecs?: number;
  /**
   * @remarks
   * The security port.
   * 
   * @example
   * 443
   */
  securePort?: number;
  /**
   * @remarks
   * The number of service providers. The value is in the following format: Number of healthy instances/Total number of instances.
   * 
   * @example
   * 1/1
   */
  status?: string;
  /**
   * @remarks
   * The virtual IP address (VIP).
   * 
   * @example
   * contactinfo
   */
  vipAddress?: string;
  static names(): { [key: string]: string } {
    return {
      app: 'App',
      durationInSecs: 'DurationInSecs',
      homePageUrl: 'HomePageUrl',
      hostName: 'HostName',
      instanceId: 'InstanceId',
      ipAddr: 'IpAddr',
      lastDirtyTimestamp: 'LastDirtyTimestamp',
      lastUpdatedTimestamp: 'LastUpdatedTimestamp',
      metadata: 'Metadata',
      port: 'Port',
      renewalIntervalInSecs: 'RenewalIntervalInSecs',
      securePort: 'SecurePort',
      status: 'Status',
      vipAddress: 'VipAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      app: 'string',
      durationInSecs: 'number',
      homePageUrl: 'string',
      hostName: 'string',
      instanceId: 'string',
      ipAddr: 'string',
      lastDirtyTimestamp: 'number',
      lastUpdatedTimestamp: 'number',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      port: 'number',
      renewalIntervalInSecs: 'number',
      securePort: 'number',
      status: 'string',
      vipAddress: 'string',
    };
  }

  validate() {
    if(this.metadata) {
      $dara.Model.validateMap(this.metadata);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

