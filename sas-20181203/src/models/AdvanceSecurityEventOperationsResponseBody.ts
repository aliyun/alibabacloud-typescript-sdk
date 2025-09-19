// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AdvanceSecurityEventOperationsResponseBodySecurityEventOperationsResponseMarkField extends $dara.Model {
  /**
   * @remarks
   * The alias of the field that is used in the whitelist rule.
   * 
   * @example
   * file path
   */
  filedAliasName?: string;
  /**
   * @remarks
   * The field that is used in the whitelist rule.
   * 
   * @example
   * filePath
   */
  filedName?: string;
  /**
   * @remarks
   * The operation that is used in the whitelist rule. Valid values:
   * 
   * *   **contains**: contains
   * *   **notContains**: does not contain
   * *   **regex**: regular expression
   * *   **strEqual**: equals
   * *   **strNotEqual**: does not equal
   * 
   * @example
   * contains
   */
  markMisType?: string;
  /**
   * @remarks
   * The value of the field that is used in the whitelist rule.
   * 
   * @example
   * 2022-04-25 10:11:04
   */
  markMisValue?: string;
  /**
   * @remarks
   * The operation that is used and can be modified in the whitelist rule. Valid values:
   * 
   * *   **contains**: contains
   * *   **notContains**: does not contain
   * *   **regex**: regular expression
   * *   **strEqual**: equals
   * *   **strNotEqual**: does not equal
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
   * The alias of the field that can be used in the whitelist rule.
   * 
   * @example
   * file path
   */
  filedAliasName?: string;
  /**
   * @remarks
   * The field that can be used in the whitelist rule.
   * 
   * @example
   * filePath
   */
  filedName?: string;
  /**
   * @remarks
   * The value of the field that can be used in the whitelist rule.
   * 
   * @example
   * contains
   */
  markMisValue?: string;
  /**
   * @remarks
   * The operation that is supported in the whitelist rule. Valid values:
   * 
   * *   **contains**: contains
   * *   **notContains**: does not contain
   * *   **regex**: regular expression
   * *   **strEqual**: equals
   * *   **strNotEqual**: does not equal
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
   * The object on which the operation is performed. This parameter is required when you set the OperationCode parameter to **advance_mark_mis_info**.
   */
  markField?: AdvanceSecurityEventOperationsResponseBodySecurityEventOperationsResponseMarkField[];
  /**
   * @remarks
   * The metadata configuration returned by the advanced whitelist rule.
   */
  markFieldsSource?: AdvanceSecurityEventOperationsResponseBodySecurityEventOperationsResponseMarkFieldsSource[];
  /**
   * @remarks
   * The operation performed to handle the alert. Valid values:
   * 
   * *   **block_ip**: blocks the alert.
   * *   **advance_mark_mis_info**: adds the alert to the whitelist.
   * *   **ignore**: ignores the alert.
   * *   **manual_handled**: marks the alert as manually handled.
   * *   **kill_process**: terminates the malicious process.
   * *   **cleanup**: performs in-depth virus detection and removal.
   * *   **kill_and_quara**: performs virus detection and removal.
   * *   **disable_malicious_defense**: turns off malicious defense behavior.
   * *   **client_problem_check**: performs troubleshooting.
   * *   **quara**: performs quarantine operations.
   * 
   * @example
   * advance_mark_mis_info
   */
  operationCode?: string;
  /**
   * @remarks
   * The configuration of the operation performed to handle the alert event.
   * 
   * @example
   * {\\"subOperation\\":\\"killByMd5andPath\\"}
   */
  operationParams?: string;
  /**
   * @remarks
   * Indicates whether the operation can be performed.
   * 
   * *   **true**: The operation can be performed.
   * *   **false**: The operation cannot be performed.
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
   * The operation performed on the alert event.
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

