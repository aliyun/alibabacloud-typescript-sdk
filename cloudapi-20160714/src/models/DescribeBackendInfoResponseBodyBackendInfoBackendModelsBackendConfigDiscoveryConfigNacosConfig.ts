// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigDiscoveryConfigNacosConfig extends $dara.Model {
  /**
   * @remarks
   * The AccessKey of the RAM user that has the resource management permissions on Microservices Engine (MSE).
   * 
   * @example
   * A5FIDxxxxxx
   */
  accessKey?: string;
  /**
   * @remarks
   * The authentication method.
   * 
   * @example
   * PASSWORD
   */
  authType?: string;
  /**
   * @remarks
   * The name of the cluster to which the microservice belongs.
   * 
   * @example
   * cluster1
   */
  clusters?: string;
  /**
   * @remarks
   * The name of the group to which the microservice that is registered with Nacos belongs.
   * 
   * @example
   * DEFAULT_GROUP
   */
  groupName?: string;
  /**
   * @remarks
   * The ID of the namespace where the microservice that is registered with Nacos resides.
   * 
   * @example
   * public
   */
  namespace?: string;
  /**
   * @remarks
   * The password.
   * 
   * @example
   * password
   */
  password?: string;
  /**
   * @remarks
   * The SecretKey of the RAM user that has the resource management permissions on MSE.
   * 
   * @example
   * dl5loxxxxxx
   */
  secretKey?: string;
  /**
   * @remarks
   * The Nacos service address.
   * 
   * @example
   * http://1xx.2xx.3xx.4xx:8848
   */
  serverAddress?: string;
  /**
   * @remarks
   * The microservice name.
   * 
   * @example
   * service-provider
   */
  serviceName?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * username
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'AccessKey',
      authType: 'AuthType',
      clusters: 'Clusters',
      groupName: 'GroupName',
      namespace: 'Namespace',
      password: 'Password',
      secretKey: 'SecretKey',
      serverAddress: 'ServerAddress',
      serviceName: 'ServiceName',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      authType: 'string',
      clusters: 'string',
      groupName: 'string',
      namespace: 'string',
      password: 'string',
      secretKey: 'string',
      serverAddress: 'string',
      serviceName: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

