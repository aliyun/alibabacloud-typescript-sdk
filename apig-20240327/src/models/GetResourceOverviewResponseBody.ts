// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceOverviewResponseBodyDataApi extends $dara.Model {
  /**
   * @remarks
   * Number of published APIs.
   * 
   * @example
   * 1
   */
  publishedCount?: number;
  /**
   * @remarks
   * Number of APIs.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      publishedCount: 'publishedCount',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      publishedCount: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceOverviewResponseBodyDataGateway extends $dara.Model {
  /**
   * @remarks
   * Number of running gateways.
   * 
   * @example
   * 1
   */
  runningCount?: number;
  /**
   * @remarks
   * Number of gateway instances.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      runningCount: 'runningCount',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      runningCount: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceOverviewResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * API information.
   */
  api?: GetResourceOverviewResponseBodyDataApi;
  /**
   * @remarks
   * Gateway information.
   */
  gateway?: GetResourceOverviewResponseBodyDataGateway;
  static names(): { [key: string]: string } {
    return {
      api: 'api',
      gateway: 'gateway',
    };
  }

  static types(): { [key: string]: any } {
    return {
      api: GetResourceOverviewResponseBodyDataApi,
      gateway: GetResourceOverviewResponseBodyDataGateway,
    };
  }

  validate() {
    if(this.api && typeof (this.api as any).validate === 'function') {
      (this.api as any).validate();
    }
    if(this.gateway && typeof (this.gateway as any).validate === 'function') {
      (this.gateway as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceOverviewResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response status code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * Resource information.
   */
  data?: GetResourceOverviewResponseBodyData;
  /**
   * @remarks
   * Response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * DD19A442-93C5-5C97-AFA0-B9C57EBD781B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetResourceOverviewResponseBodyData,
      message: 'string',
      requestId: 'string',
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

