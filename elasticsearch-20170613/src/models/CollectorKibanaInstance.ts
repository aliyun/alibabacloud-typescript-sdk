// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CollectorKibanaInstance extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * collectorElasticsearchForKibana
   */
  configType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * es-cn-*****-kibana.internal.elasticsearch.aliyuncs.com:5601
   */
  host?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * es-cn-45dfy****
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://es-cn-****.kibana.elasticsearch.aliyuncs.com:5601
   */
  kibanaHost?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * password
   */
  password?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * username
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      configType: 'configType',
      host: 'host',
      instanceId: 'instanceId',
      kibanaHost: 'kibanaHost',
      password: 'password',
      protocol: 'protocol',
      userName: 'userName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configType: 'string',
      host: 'string',
      instanceId: 'string',
      kibanaHost: 'string',
      password: 'string',
      protocol: 'string',
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

