// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryIpcQuotaResponseBodyIpcQuotaInfos extends $dara.Model {
  /**
   * @example
   * understand
   */
  capability?: string;
  /**
   * @example
   * 32
   */
  consumedQuota?: number;
  /**
   * @example
   * 2025-12-21T16:00:00Z
   */
  dateTime?: string;
  /**
   * @example
   * 10000
   */
  maxQuota?: number;
  static names(): { [key: string]: string } {
    return {
      capability: 'Capability',
      consumedQuota: 'ConsumedQuota',
      dateTime: 'DateTime',
      maxQuota: 'MaxQuota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capability: 'string',
      consumedQuota: 'number',
      dateTime: 'string',
      maxQuota: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryIpcQuotaResponseBody extends $dara.Model {
  ipcQuotaInfos?: QueryIpcQuotaResponseBodyIpcQuotaInfos[];
  /**
   * @example
   * ******11-DB8D-4A9A-875B-275798******
   */
  requestId?: string;
  /**
   * @example
   * 39
   */
  total?: string;
  static names(): { [key: string]: string } {
    return {
      ipcQuotaInfos: 'IpcQuotaInfos',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipcQuotaInfos: { 'type': 'array', 'itemType': QueryIpcQuotaResponseBodyIpcQuotaInfos },
      requestId: 'string',
      total: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ipcQuotaInfos)) {
      $dara.Model.validateArray(this.ipcQuotaInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

