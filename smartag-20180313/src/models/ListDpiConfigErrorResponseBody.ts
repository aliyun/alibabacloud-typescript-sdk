// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDpiConfigErrorResponseBodyDpiConfigErrorRuleConfigErrorList extends $dara.Model {
  /**
   * @remarks
   * The IDs of the application groups that have configuration errors.
   * 
   * You can call the [ListDpiGroups](https://help.aliyun.com/document_detail/196754.html) operation to query application group IDs and information about the applications.
   */
  dpiGroupIds?: string[];
  /**
   * @remarks
   * The IDs of applications that have configuration errors.
   * 
   * You can call the [ListDpiSignatures](https://help.aliyun.com/document_detail/196630.html) operation to query application IDs and information about the applications.
   */
  dpiSignatureIds?: string[];
  /**
   * @remarks
   * The IDs of rules that are applied to applications with configuration errors.
   * 
   * *   If you make the request to query configuration errors of ACLs, the IDs of ACL rules that have configuration errors are returned.
   * *   If you make the request to query configuration errors of QoS polices, the IDs of the 5-tuples in the QoS polices that have configuration errors are returned.
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
   * The type of the configuration error. Valid values:
   * 
   * *   **DeviceNotSupported**: The SAG instance does not support the DPI feature.
   * *   **VersionNotSupported**: The version of the DPI feature is outdated.
   * *   **NotEnable**: The DPI feature is disabled on the SAG instance.
   * 
   * @example
   * DeviceNotSupported
   */
  errorType?: string;
  /**
   * @remarks
   * The information about the configuration errors.
   */
  ruleConfigErrorList?: ListDpiConfigErrorResponseBodyDpiConfigErrorRuleConfigErrorList[];
  /**
   * @remarks
   * The serial number of the SAG instance.
   * 
   * @example
   * sag-2160808****
   */
  SN?: string;
  /**
   * @remarks
   * The ID of the SAG instance.
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
   * The information about the configuration errors.
   */
  dpiConfigError?: ListDpiConfigErrorResponseBodyDpiConfigError[];
  /**
   * @remarks
   * The maximum number of entries returned per page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that was used to query the next page.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F47B5293-27B6-48EF-A9C6-E90A41449813
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
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

