// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDpiConfigErrorResponseBodyDpiConfigErrorRuleConfigErrorList extends $dara.Model {
  /**
   * @remarks
   * A list of IDs of application groups that have configuration errors.
   */
  dpiGroupIds?: string[];
  /**
   * @remarks
   * A list of IDs of applications that have configuration errors.
   */
  dpiSignatureIds?: string[];
  /**
   * @remarks
   * The ID of the rule that is associated with the application that has a configuration error.
   * 
   * - If you query DPI configuration errors for Resource Access Management, this parameter indicates the ID of the Resource Access Management rule instance that has a configuration error.
   * - If you query DPI configuration errors for a QoS policy, this parameter indicates the ID of the quintuple rule instance that has a configuration error.
   * 
   * @example
   * qospy-axud4s62gz632b****
   */
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      dpiGroupIds: 'DpiGroupIds',
      dpiSignatureIds: 'DpiSignatureIds',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dpiGroupIds: { 'type': 'array', 'itemType': 'string' },
      dpiSignatureIds: { 'type': 'array', 'itemType': 'string' },
      ruleId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dpiGroupIds)) {
      $dara.Model.validateArray(this.dpiGroupIds);
    }
    if(Array.isArray(this.dpiSignatureIds)) {
      $dara.Model.validateArray(this.dpiSignatureIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDpiConfigErrorResponseBodyDpiConfigError extends $dara.Model {
  /**
   * @remarks
   * The type of the configuration error.
   * 
   * - DeviceNotSupported: The Smart Access Gateway device does not support the DPI feature.
   * - VersionNotSupported: The DPI version of the Smart Access Gateway device is too old.
   * - **NotEnable**: The DPI feature is disabled for the Smart Access Gateway device.
   * 
   * @example
   * DeviceNotSupported
   */
  errorType?: string;
  /**
   * @remarks
   * A list of rule configuration errors.
   */
  ruleConfigErrorList?: ListDpiConfigErrorResponseBodyDpiConfigErrorRuleConfigErrorList[];
  /**
   * @remarks
   * The serial number of the Smart Access Gateway device.
   * 
   * @example
   * sag-2160808****
   */
  SN?: string;
  /**
   * @remarks
   * The ID of the Smart Access Gateway instance.
   * 
   * @example
   * sag-1e8sgws6b133b8****
   */
  smartAGId?: string;
  static names(): { [key: string]: string } {
    return {
      errorType: 'ErrorType',
      ruleConfigErrorList: 'RuleConfigErrorList',
      SN: 'SN',
      smartAGId: 'SmartAGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorType: 'string',
      ruleConfigErrorList: { 'type': 'array', 'itemType': ListDpiConfigErrorResponseBodyDpiConfigErrorRuleConfigErrorList },
      SN: 'string',
      smartAGId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ruleConfigErrorList)) {
      $dara.Model.validateArray(this.ruleConfigErrorList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDpiConfigErrorResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of DPI configuration errors.
   */
  dpiConfigError?: ListDpiConfigErrorResponseBodyDpiConfigError[];
  /**
   * @remarks
   * The maximum number of configuration errors to return on each page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next page of results.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F47B5293-27B6-48EF-A9C6-E90A41449813
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of DPI configuration errors.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      dpiConfigError: 'DpiConfigError',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dpiConfigError: { 'type': 'array', 'itemType': ListDpiConfigErrorResponseBodyDpiConfigError },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dpiConfigError)) {
      $dara.Model.validateArray(this.dpiConfigError);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

