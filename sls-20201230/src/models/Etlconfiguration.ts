// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ETLConfigurationSink } from "./EtlconfigurationSink";


export class ETLConfiguration extends $dara.Model {
  /**
   * @remarks
   * The AccessKey ID used to grant the permissions to read data from the source logstore. This parameter is required. If you use a role to grant the required permissions, specify an empty string.
   * 
   * @deprecated
   */
  accessKeyId?: string;
  /**
   * @remarks
   * The AccessKey secret used to grant the permissions to read data from the source logstore. This parameter is required. If you use a role to grant the required permissions, specify an empty string.
   * 
   * @deprecated
   */
  accessKeySecret?: string;
  /**
   * @remarks
   * The beginning of the time range for transformation. Specify a Unix timestamp that is accurate to the second. This parameter is required. If you want to transform data from the first log in the source logstore, enter 0.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  fromTime?: number;
  /**
   * @remarks
   * The type of the data transformation syntax.
   * 
   * @example
   * SPL
   */
  lang?: string;
  /**
   * @remarks
   * The name of the source logstore.
   * 
   * This parameter is required.
   * 
   * @example
   * test-logstore
   */
  logstore?: string;
  /**
   * @remarks
   * The advanced parameter settings.
   * 
   * @example
   * config.vpc.vpc_id.test1:vpc-uf6mskb0b****n9yj
   */
  parameters?: { [key: string]: any };
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the role that is used to grant the permissions to read data from the source logstore.
   * 
   * This parameter is required.
   * 
   * @example
   * acs:ram::13234:role/logtarget
   */
  roleArn?: string;
  /**
   * @remarks
   * The transformation script.
   * 
   * This parameter is required.
   * 
   * @example
   * e_set("key","value")
   */
  script?: string;
  /**
   * @remarks
   * The storage destinations.
   * 
   * This parameter is required.
   */
  sinks?: ETLConfigurationSink[];
  /**
   * @remarks
   * The end of the time range for transformation. Specify a Unix timestamp that is accurate to the second. This parameter is required. If you want to transform data until the data transformation job is manually stopped, enter 0.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  toTime?: number;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'accessKeyId',
      accessKeySecret: 'accessKeySecret',
      fromTime: 'fromTime',
      lang: 'lang',
      logstore: 'logstore',
      parameters: 'parameters',
      roleArn: 'roleArn',
      script: 'script',
      sinks: 'sinks',
      toTime: 'toTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      accessKeySecret: 'string',
      fromTime: 'number',
      lang: 'string',
      logstore: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      roleArn: 'string',
      script: 'string',
      sinks: { 'type': 'array', 'itemType': ETLConfigurationSink },
      toTime: 'number',
    };
  }

  validate() {
    if(this.parameters) {
      $dara.Model.validateMap(this.parameters);
    }
    if(Array.isArray(this.sinks)) {
      $dara.Model.validateArray(this.sinks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

