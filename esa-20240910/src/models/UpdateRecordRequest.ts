// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRecordRequestAuthConf extends $dara.Model {
  accessKey?: string;
  authType?: string;
  region?: string;
  secretKey?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'AccessKey',
      authType: 'AuthType',
      region: 'Region',
      secretKey: 'SecretKey',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      authType: 'string',
      region: 'string',
      secretKey: 'string',
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

export class UpdateRecordRequestData extends $dara.Model {
  algorithm?: number;
  certificate?: string;
  fingerprint?: string;
  flag?: number;
  keyTag?: number;
  matchingType?: number;
  port?: number;
  priority?: number;
  selector?: number;
  tag?: string;
  type?: number;
  usage?: number;
  value?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      certificate: 'Certificate',
      fingerprint: 'Fingerprint',
      flag: 'Flag',
      keyTag: 'KeyTag',
      matchingType: 'MatchingType',
      port: 'Port',
      priority: 'Priority',
      selector: 'Selector',
      tag: 'Tag',
      type: 'Type',
      usage: 'Usage',
      value: 'Value',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'number',
      certificate: 'string',
      fingerprint: 'string',
      flag: 'number',
      keyTag: 'number',
      matchingType: 'number',
      port: 'number',
      priority: 'number',
      selector: 'number',
      tag: 'string',
      type: 'number',
      usage: 'number',
      value: 'string',
      weight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRecordRequest extends $dara.Model {
  authConf?: UpdateRecordRequestAuthConf;
  bizName?: string;
  comment?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  data?: UpdateRecordRequestData;
  hostPolicy?: string;
  /**
   * @remarks
   * 是否代理加速
   */
  proxied?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  recordId?: number;
  sourceType?: string;
  ttl?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      authConf: 'AuthConf',
      bizName: 'BizName',
      comment: 'Comment',
      data: 'Data',
      hostPolicy: 'HostPolicy',
      proxied: 'Proxied',
      recordId: 'RecordId',
      sourceType: 'SourceType',
      ttl: 'Ttl',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authConf: UpdateRecordRequestAuthConf,
      bizName: 'string',
      comment: 'string',
      data: UpdateRecordRequestData,
      hostPolicy: 'string',
      proxied: 'boolean',
      recordId: 'number',
      sourceType: 'string',
      ttl: 'number',
      type: 'string',
    };
  }

  validate() {
    if(this.authConf && typeof (this.authConf as any).validate === 'function') {
      (this.authConf as any).validate();
    }
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

