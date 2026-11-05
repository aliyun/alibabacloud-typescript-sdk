// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDpiConfigErrorResponseBodyDpiConfigErrorRuleConfigErrorList extends $dara.Model {
  /**
   * @remarks
   * The IDs of the application groups that have configuration exceptions.
   */
  dpiGroupIds?: string[];
  /**
   * @remarks
   * The IDs of the applications that have configuration exceptions.
   */
  dpiSignatureIds?: string[];
  /**
   * @remarks
   * The instance IDs of the rules associated with the applications that have configuration exceptions.
   * 
   * - If you are querying the access control DPI configuration exception information, the instance ID of the access control rule instance that has a configuration exception is displayed.
   * - If you are querying the QoS policy DPI configuration exception information, the instance ID of the 5-tuple-based quintuple rules instance that has a configuration exception is displayed.
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
   * The type of the configuration exception. Valid values:
   * 
   * - **DeviceNotSupported**: The SAG device does not support the DPI feature.
   * - **VersionNotSupported**: The DPI version running Smart Access Gateway device is too low.
   * - **NotEnable**: The DPI feature is not enabled Smart Access Gateway device.
   * 
   * @example
   * DeviceNotSupported
   */
  errorType?: string;
  /**
   * @remarks
   * The list of DPI configuration exceptions.
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
   * The instance ID of the Smart Access Gateway.
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
   * The list of DPI configuration exceptions.
   */
  dpiConfigError?: ListDpiConfigErrorResponseBodyDpiConfigError[];
  /**
   * @remarks
   * The maximum number of entries allowed per page in a paged query.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token used to start the next query.
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
   * The total number of DPI configuration exception entries.
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

