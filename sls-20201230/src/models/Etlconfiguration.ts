// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ETLConfigurationSink } from "./EtlconfigurationSink";


export class ETLConfiguration extends $dara.Model {
  /**
   * @deprecated
   */
  accessKeyId?: string;
  /**
   * @deprecated
   */
  accessKeySecret?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1714274900
   */
  fromTime?: number;
  /**
   * @example
   * SPL
   */
  lang?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-logstore
   */
  logstore?: string;
  /**
   * @example
   * config.vpc.vpc_id.test1：vpc-uf6mskb0b****n9yj
   */
  parameters?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * acs:ram::13234:role/logtarget
   */
  roleArn?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * e_set("key","value")
   */
  script?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sinks?: ETLConfigurationSink[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1714274970
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

