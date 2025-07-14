// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryEmbeddedInfoResponseBodyResultDetail extends $dara.Model {
  /**
   * @remarks
   * The number of embedded self-service fetching.
   * 
   * @example
   * 1
   */
  dashboardOfflineQuery?: number;
  /**
   * @remarks
   * The number of embedded dashboards.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of embedded spreadsheets.
   * 
   * @example
   * 1
   */
  report?: number;
  static names(): { [key: string]: string } {
    return {
      dashboardOfflineQuery: 'DashboardOfflineQuery',
      page: 'Page',
      report: 'Report',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dashboardOfflineQuery: 'number',
      page: 'number',
      report: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEmbeddedInfoResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Embed the statistics of the work.
   */
  detail?: QueryEmbeddedInfoResponseBodyResultDetail;
  /**
   * @remarks
   * The number of reports that are currently embedded.
   * 
   * @example
   * 3
   */
  embeddedCount?: number;
  /**
   * @remarks
   * The maximum number of reports that can be embedded.
   * 
   * @example
   * 100
   */
  maxCount?: number;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      embeddedCount: 'EmbeddedCount',
      maxCount: 'MaxCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: QueryEmbeddedInfoResponseBodyResultDetail,
      embeddedCount: 'number',
      maxCount: 'number',
    };
  }

  validate() {
    if(this.detail && typeof (this.detail as any).validate === 'function') {
      (this.detail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEmbeddedInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  /**
   * @remarks
   * The embedded information of the reports under the organization.
   */
  result?: QueryEmbeddedInfoResponseBodyResult;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: QueryEmbeddedInfoResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

