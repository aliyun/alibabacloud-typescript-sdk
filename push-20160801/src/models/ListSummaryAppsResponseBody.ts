// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSummaryAppsResponseBodySummaryAppInfosSummaryAppInfo extends $dara.Model {
  /**
   * @example
   * 23****07
   */
  appKey?: number;
  /**
   * @example
   * abc
   */
  appName?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      appName: 'AppName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'number',
      appName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSummaryAppsResponseBodySummaryAppInfos extends $dara.Model {
  summaryAppInfo?: ListSummaryAppsResponseBodySummaryAppInfosSummaryAppInfo[];
  static names(): { [key: string]: string } {
    return {
      summaryAppInfo: 'SummaryAppInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      summaryAppInfo: { 'type': 'array', 'itemType': ListSummaryAppsResponseBodySummaryAppInfosSummaryAppInfo },
    };
  }

  validate() {
    if(Array.isArray(this.summaryAppInfo)) {
      $dara.Model.validateArray(this.summaryAppInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSummaryAppsResponseBody extends $dara.Model {
  /**
   * @example
   * 9998B3CC-ED9E-4CB3-A8FB-DCC61296BFBC
   */
  requestId?: string;
  summaryAppInfos?: ListSummaryAppsResponseBodySummaryAppInfos;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      summaryAppInfos: 'SummaryAppInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      summaryAppInfos: ListSummaryAppsResponseBodySummaryAppInfos,
    };
  }

  validate() {
    if(this.summaryAppInfos && typeof (this.summaryAppInfos as any).validate === 'function') {
      (this.summaryAppInfos as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

