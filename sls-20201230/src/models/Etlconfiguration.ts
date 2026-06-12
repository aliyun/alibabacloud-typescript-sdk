// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ETLConfigurationSink } from "./EtlconfigurationSink";


export class ETLConfiguration extends $dara.Model {
  /**
   * @remarks
   * The AccessKey ID that is required to read data from the source Logstore. This parameter is required. If you use a RAM role for authorization, set this parameter to an empty string.
   * 
   * @deprecated
   */
  accessKeyId?: string;
  /**
   * @remarks
   * The AccessKey secret that is required to read data from the source Logstore. This parameter is required. If you use a RAM role for authorization, set this parameter to an empty string.
   * 
   * @deprecated
   */
  accessKeySecret?: string;
  /**
   * @remarks
   * The start time of the data transformation. The value is a UNIX timestamp. Unit: seconds. This parameter is required. To start the data transformation from the earliest log in the source Logstore, set this parameter to 0.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  fromTime?: number;
  /**
   * @remarks
   * The language of the data transformation script.
   * 
   * @example
   * SPL
   */
  lang?: string;
  /**
   * @remarks
   * The name of the source Logstore.
   * 
   * This parameter is required.
   * 
   * @example
   * test-logstore
   */
  logstore?: string;
  /**
   * @remarks
   * Advanced parameters.
   * 
   * @example
   * config.vpc.vpc_id.test1：vpc-uf6mskb0b****n9yj
   */
  parameters?: { [key: string]: any };
  /**
   * @remarks
   * The ARN of the RAM role that is authorized to read data from the source Logstore.
   * 
   * This parameter is required.
   * 
   * @example
   * acs:ram::13234:role/logtarget
   */
  roleArn?: string;
  /**
   * @remarks
   * The data transformation script.
   * 
   * This parameter is required.
   * 
   * @example
   * * | extend key=\\"value\\"
   */
  script?: string;
  /**
   * @remarks
   * The output destinations of the data transformation.
   * 
   * This parameter is required.
   */
  sinks?: ETLConfigurationSink[];
  /**
   * @remarks
   * The end time of the data transformation. The value is a UNIX timestamp. Unit: seconds. This parameter is required. To continuously perform the data transformation until you manually stop it, set this parameter to 0.
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

