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

export class GetResourceOverviewResponseBodyDataRiskOverviewRiskDetails extends $dara.Model {
  /**
   * @example
   * gw-xxxxxx
   */
  gatewayId?: string;
  /**
   * @example
   * test-gateway
   */
  gatewayName?: string;
  /**
   * @example
   * LOW
   */
  riskLevel?: string;
  riskNames?: string[];
  /**
   * @example
   * 100
   */
  score?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'gatewayId',
      gatewayName: 'gatewayName',
      riskLevel: 'riskLevel',
      riskNames: 'riskNames',
      score: 'score',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      gatewayName: 'string',
      riskLevel: 'string',
      riskNames: { 'type': 'array', 'itemType': 'string' },
      score: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.riskNames)) {
      $dara.Model.validateArray(this.riskNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceOverviewResponseBodyDataRiskOverview extends $dara.Model {
  /**
   * @example
   * 1
   */
  count?: string;
  riskDetails?: GetResourceOverviewResponseBodyDataRiskOverviewRiskDetails[];
  /**
   * @example
   * LOW
   */
  riskLevel?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      riskDetails: 'riskDetails',
      riskLevel: 'riskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'string',
      riskDetails: { 'type': 'array', 'itemType': GetResourceOverviewResponseBodyDataRiskOverviewRiskDetails },
      riskLevel: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.riskDetails)) {
      $dara.Model.validateArray(this.riskDetails);
    }
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
  riskOverview?: GetResourceOverviewResponseBodyDataRiskOverview[];
  static names(): { [key: string]: string } {
    return {
      api: 'api',
      gateway: 'gateway',
      riskOverview: 'riskOverview',
    };
  }

  static types(): { [key: string]: any } {
    return {
      api: GetResourceOverviewResponseBodyDataApi,
      gateway: GetResourceOverviewResponseBodyDataGateway,
      riskOverview: { 'type': 'array', 'itemType': GetResourceOverviewResponseBodyDataRiskOverview },
    };
  }

  validate() {
    if(this.api && typeof (this.api as any).validate === 'function') {
      (this.api as any).validate();
    }
    if(this.gateway && typeof (this.gateway as any).validate === 'function') {
      (this.gateway as any).validate();
    }
    if(Array.isArray(this.riskOverview)) {
      $dara.Model.validateArray(this.riskOverview);
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

