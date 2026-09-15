// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AdvanceSecurityEventOperationsResponseBodySecurityEventOperationsResponseMarkField extends $dara.Model {
  /**
   * @remarks
   * The name of the whitelist field in the configured whitelist rule.
   * 
   * @example
   * file path
   */
  filedAliasName?: string;
  /**
   * @remarks
   * The whitelist field in the configured whitelist rule.
   * 
   * @example
   * filePath
   */
  filedName?: string;
  /**
   * @remarks
   * The wildcard in the configured whitelist rule. Valid values:
   * - **contains**: contains
   * - **notContains**: does not contain
   * - **regex**: regular expression
   * - **strEqual**: equals
   * - **strNotEqual**: does not equal
   * 
   * @example
   * contains
   */
  markMisType?: string;
  /**
   * @remarks
   * The rule value of the configured whitelist rule.
   * 
   * @example
   * 2022-04-25 10:11:04
   */
  markMisValue?: string;
  /**
   * @remarks
   * The wildcard types that can be modified in the configured whitelist rule. Valid values:
   * 
   * - **contains**: contains
   * - **notContains**: does not contain
   * - **regex**: regular expression
   * - **strEqual**: equals
   * - **strNotEqual**: does not equal
   */
  supportedMisType?: string[];
  static names(): { [key: string]: string } {
    return {
      filedAliasName: 'FiledAliasName',
      filedName: 'FiledName',
      markMisType: 'MarkMisType',
      markMisValue: 'MarkMisValue',
      supportedMisType: 'SupportedMisType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filedAliasName: 'string',
      filedName: 'string',
      markMisType: 'string',
      markMisValue: 'string',
      supportedMisType: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.supportedMisType)) {
      $dara.Model.validateArray(this.supportedMisType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AdvanceSecurityEventOperationsResponseBodySecurityEventOperationsResponseMarkFieldsSource extends $dara.Model {
  /**
   * @remarks
   * The name of the whitelist field that can be configured in a whitelist rule.
   * 
   * @example
   * file path
   */
  filedAliasName?: string;
  /**
   * @remarks
   * The whitelist field that can be configured in a whitelist rule.
   * 
   * @example
   * filePath
   */
  filedName?: string;
  /**
   * @remarks
   * The rule value of the whitelist rule.
   * 
   * @example
   * contains
   */
  markMisValue?: string;
  /**
   * @remarks
   * The supported wildcards in the whitelist rule. Valid values:
   * 
   * - **contains**: contains
   * - **notContains**: does not contain
   * - **regex**: regular expression
   * - **strEqual**: equals
   * - **strNotEqual**: does not equal
   */
  supportedMisType?: string[];
  static names(): { [key: string]: string } {
    return {
      filedAliasName: 'FiledAliasName',
      filedName: 'FiledName',
      markMisValue: 'MarkMisValue',
      supportedMisType: 'SupportedMisType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filedAliasName: 'string',
      filedName: 'string',
      markMisValue: 'string',
      supportedMisType: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.supportedMisType)) {
      $dara.Model.validateArray(this.supportedMisType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AdvanceSecurityEventOperationsResponseBodySecurityEventOperationsResponse extends $dara.Model {
  /**
   * @remarks
   * The configuration information when the handling method is **advance_mark_mis_info**.
   */
  markField?: AdvanceSecurityEventOperationsResponseBodySecurityEventOperationsResponseMarkField[];
  /**
   * @remarks
   * The metadata configuration information returned for the advanced whitelist.
   */
  markFieldsSource?: AdvanceSecurityEventOperationsResponseBodySecurityEventOperationsResponseMarkFieldsSource[];
  /**
   * @remarks
   * The handling method for the alert. Valid values:
   * 
   * - **block_ip**: Block.
   * - **advance_mark_mis_info**: Add to whitelist.
   * - **ignore**: Ignore.
   * - **manual_handled**: Manually handled.
   * - **kill_process**: Terminate process.
   * - **cleanup**: Deep scan and removal.
   * - **kill_and_quara**: Virus scan and quarantine.
   * - **disable_malicious_defense**: Disable malicious behavior defense.
   * - **client_problem_check**: Troubleshoot.
   * - **quara**: Quarantine.
   * 
   * @example
   * advance_mark_mis_info
   */
  operationCode?: string;
  /**
   * @remarks
   * The configuration of the sub-operation for the alert event handling method.
   * 
   * @example
   * {\\"subOperation\\":\\"killByMd5andPath\\"}
   */
  operationParams?: string;
  /**
   * @remarks
   * Indicates whether the operation is available.
   * 
   * - **true**: Available.
   * - **false**: Not available.
   * 
   * @example
   * false
   */
  userCanOperate?: boolean;
  static names(): { [key: string]: string } {
    return {
      markField: 'MarkField',
      markFieldsSource: 'MarkFieldsSource',
      operationCode: 'OperationCode',
      operationParams: 'OperationParams',
      userCanOperate: 'UserCanOperate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      markField: { 'type': 'array', 'itemType': AdvanceSecurityEventOperationsResponseBodySecurityEventOperationsResponseMarkField },
      markFieldsSource: { 'type': 'array', 'itemType': AdvanceSecurityEventOperationsResponseBodySecurityEventOperationsResponseMarkFieldsSource },
      operationCode: 'string',
      operationParams: 'string',
      userCanOperate: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.markField)) {
      $dara.Model.validateArray(this.markField);
    }
    if(Array.isArray(this.markFieldsSource)) {
      $dara.Model.validateArray(this.markFieldsSource);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AdvanceSecurityEventOperationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A4EB8B1C-1DEC-5E18-BCD0-XXXXXXXXX
   */
  requestId?: string;
  /**
   * @remarks
   * The operation types for handling alert events.
   */
  securityEventOperationsResponse?: AdvanceSecurityEventOperationsResponseBodySecurityEventOperationsResponse[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      securityEventOperationsResponse: 'SecurityEventOperationsResponse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      securityEventOperationsResponse: { 'type': 'array', 'itemType': AdvanceSecurityEventOperationsResponseBodySecurityEventOperationsResponse },
    };
  }

  validate() {
    if(Array.isArray(this.securityEventOperationsResponse)) {
      $dara.Model.validateArray(this.securityEventOperationsResponse);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

