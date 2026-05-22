// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRecordResponseBodyRecordModelAuthConf extends $dara.Model {
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

export class GetRecordResponseBodyRecordModelData extends $dara.Model {
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
  tags?: { [key: string]: any };
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
      tags: 'Tags',
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
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      type: 'number',
      usage: 'number',
      value: 'string',
      weight: 'number',
    };
  }

  validate() {
    if(this.tags) {
      $dara.Model.validateMap(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRecordResponseBodyRecordModel extends $dara.Model {
  authConf?: GetRecordResponseBodyRecordModelAuthConf;
  bizName?: string;
  comment?: string;
  createTime?: string;
  data?: GetRecordResponseBodyRecordModelData;
  hostPolicy?: string;
  proxied?: boolean;
  recordCname?: string;
  recordId?: number;
  recordName?: string;
  recordSourceType?: string;
  recordType?: string;
  siteId?: number;
  siteName?: string;
  ttl?: number;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      authConf: 'AuthConf',
      bizName: 'BizName',
      comment: 'Comment',
      createTime: 'CreateTime',
      data: 'Data',
      hostPolicy: 'HostPolicy',
      proxied: 'Proxied',
      recordCname: 'RecordCname',
      recordId: 'RecordId',
      recordName: 'RecordName',
      recordSourceType: 'RecordSourceType',
      recordType: 'RecordType',
      siteId: 'SiteId',
      siteName: 'SiteName',
      ttl: 'Ttl',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authConf: GetRecordResponseBodyRecordModelAuthConf,
      bizName: 'string',
      comment: 'string',
      createTime: 'string',
      data: GetRecordResponseBodyRecordModelData,
      hostPolicy: 'string',
      proxied: 'boolean',
      recordCname: 'string',
      recordId: 'number',
      recordName: 'string',
      recordSourceType: 'string',
      recordType: 'string',
      siteId: 'number',
      siteName: 'string',
      ttl: 'number',
      updateTime: 'string',
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

export class GetRecordResponseBody extends $dara.Model {
  recordModel?: GetRecordResponseBodyRecordModel;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      recordModel: 'RecordModel',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordModel: GetRecordResponseBodyRecordModel,
      requestId: 'string',
    };
  }

  validate() {
    if(this.recordModel && typeof (this.recordModel as any).validate === 'function') {
      (this.recordModel as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

