// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIsolationRulesResponseBodyDataResult extends $dara.Model {
  /**
   * @example
   * hkhon1po62@c3df23522bXXXXX
   */
  appId?: string;
  /**
   * @example
   * spring-cloud-a
   */
  appName?: string;
  /**
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @example
   * "{\\"appName\\":\\"spring-cloud-a\\",\\"fallbackBehavior\\":{\\"webFallbackMode\\":0,\\"webRespContentType\\":0,\\"webRespMessage\\":\\"Blocked\\",\\"webRespStatusCode\\":429},\\"id\\":977,\\"name\\":\\"Fallback\\",\\"namespace\\":\\"default\\",\\"resourceClassification\\":1}"
   */
  fallbackObject?: string;
  limitApp?: string;
  /**
   * @example
   * default
   */
  namespace?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * /a
   */
  resource?: string;
  /**
   * @example
   * 1
   */
  ruleId?: number;
  /**
   * @example
   * 3
   */
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      enable: 'Enable',
      fallbackObject: 'FallbackObject',
      limitApp: 'LimitApp',
      namespace: 'Namespace',
      regionId: 'RegionId',
      resource: 'Resource',
      ruleId: 'RuleId',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      enable: 'boolean',
      fallbackObject: 'string',
      limitApp: 'string',
      namespace: 'string',
      regionId: 'string',
      resource: 'string',
      ruleId: 'number',
      threshold: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIsolationRulesResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  result?: ListIsolationRulesResponseBodyDataResult[];
  /**
   * @example
   * 3
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      result: 'Result',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      result: { 'type': 'array', 'itemType': ListIsolationRulesResponseBodyDataResult },
      totalSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIsolationRulesResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  data?: ListIsolationRulesResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * 4E9FDCFE-0738-493B-B801-82BDFBCB****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: ListIsolationRulesResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

