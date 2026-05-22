// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchCreateRecordsResponseBodyRecordResultListFailedData extends $dara.Model {
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

export class BatchCreateRecordsResponseBodyRecordResultListFailed extends $dara.Model {
  bizName?: string;
  data?: BatchCreateRecordsResponseBodyRecordResultListFailedData;
  description?: string;
  proxied?: boolean;
  recordId?: number;
  recordName?: string;
  recordType?: string;
  sourceType?: string;
  ttl?: number;
  static names(): { [key: string]: string } {
    return {
      bizName: 'BizName',
      data: 'Data',
      description: 'Description',
      proxied: 'Proxied',
      recordId: 'RecordId',
      recordName: 'RecordName',
      recordType: 'RecordType',
      sourceType: 'SourceType',
      ttl: 'Ttl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizName: 'string',
      data: BatchCreateRecordsResponseBodyRecordResultListFailedData,
      description: 'string',
      proxied: 'boolean',
      recordId: 'number',
      recordName: 'string',
      recordType: 'string',
      sourceType: 'string',
      ttl: 'number',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCreateRecordsResponseBodyRecordResultListSuccessData extends $dara.Model {
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

export class BatchCreateRecordsResponseBodyRecordResultListSuccess extends $dara.Model {
  bizName?: string;
  data?: BatchCreateRecordsResponseBodyRecordResultListSuccessData;
  description?: string;
  proxied?: boolean;
  recordId?: number;
  recordName?: string;
  recordType?: string;
  sourceType?: string;
  ttl?: number;
  static names(): { [key: string]: string } {
    return {
      bizName: 'BizName',
      data: 'Data',
      description: 'Description',
      proxied: 'Proxied',
      recordId: 'RecordId',
      recordName: 'RecordName',
      recordType: 'RecordType',
      sourceType: 'SourceType',
      ttl: 'Ttl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizName: 'string',
      data: BatchCreateRecordsResponseBodyRecordResultListSuccessData,
      description: 'string',
      proxied: 'boolean',
      recordId: 'number',
      recordName: 'string',
      recordType: 'string',
      sourceType: 'string',
      ttl: 'number',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCreateRecordsResponseBodyRecordResultList extends $dara.Model {
  failed?: BatchCreateRecordsResponseBodyRecordResultListFailed[];
  success?: BatchCreateRecordsResponseBodyRecordResultListSuccess[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: { 'type': 'array', 'itemType': BatchCreateRecordsResponseBodyRecordResultListFailed },
      success: { 'type': 'array', 'itemType': BatchCreateRecordsResponseBodyRecordResultListSuccess },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.failed)) {
      $dara.Model.validateArray(this.failed);
    }
    if(Array.isArray(this.success)) {
      $dara.Model.validateArray(this.success);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCreateRecordsResponseBody extends $dara.Model {
  recordResultList?: BatchCreateRecordsResponseBodyRecordResultList;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      recordResultList: 'RecordResultList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordResultList: BatchCreateRecordsResponseBodyRecordResultList,
      requestId: 'string',
    };
  }

  validate() {
    if(this.recordResultList && typeof (this.recordResultList as any).validate === 'function') {
      (this.recordResultList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

