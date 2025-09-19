// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSecurityEventOperationsResponseBodySecurityEventOperationsResponseMappingMarkFields extends $dara.Model {
  /**
   * @remarks
   * The description of the field that is added to the whitelist.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the value of the field can be changed.
   * 
   * *   **CUSTOM**: The value of the field can be changed.
   * *   **SYSTEM**: The value of the field cannot be changed.
   * 
   * @example
   * CUSTOM
   */
  fillType?: string;
  /**
   * @remarks
   * The maximum length of the field that is added to the whitelist.
   * 
   * @example
   * 2048
   */
  maxLength?: number;
  /**
   * @remarks
   * The minimum length of the field that is added to the whitelist.
   * 
   * @example
   * 1024
   */
  minLength?: number;
  /**
   * @remarks
   * The name of the field that is added to the whitelist.
   * 
   * @example
   * pid
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether the parameter is required. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  required?: boolean;
  /**
   * @remarks
   * The display name of the field that can be used in the whitelist rule.
   * 
   * @example
   * pid
   */
  showName?: string;
  /**
   * @remarks
   * The display name of the field that is added to the whitelist.
   * 
   * @example
   * 1791
   */
  showValue?: string;
  /**
   * @remarks
   * The value of the field that is added to the whitelist.
   * 
   * @example
   * 1791
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      fillType: 'FillType',
      maxLength: 'MaxLength',
      minLength: 'MinLength',
      name: 'Name',
      required: 'Required',
      showName: 'ShowName',
      showValue: 'ShowValue',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      fillType: 'string',
      maxLength: 'number',
      minLength: 'number',
      name: 'string',
      required: 'boolean',
      showName: 'string',
      showValue: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityEventOperationsResponseBodySecurityEventOperationsResponseMarkField extends $dara.Model {
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
   * gmtModified
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
   * An array consisting of the operations that are supported by the method to add the alert event to the whitelist.
   */
  supportedMisType?: string[];
  /**
   * @remarks
   * The UUID of the server on which the alert event is detected.
   * 
   * @example
   * 3d6b4a75-c28f-447b-9142-38f6252c****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      filedAliasName: 'FiledAliasName',
      filedName: 'FiledName',
      markMisType: 'MarkMisType',
      markMisValue: 'MarkMisValue',
      supportedMisType: 'SupportedMisType',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filedAliasName: 'string',
      filedName: 'string',
      markMisType: 'string',
      markMisValue: 'string',
      supportedMisType: { 'type': 'array', 'itemType': 'string' },
      uuid: 'string',
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

export class DescribeSecurityEventOperationsResponseBodySecurityEventOperationsResponseMarkFieldsSource extends $dara.Model {
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
   * gmtModified
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
   * An array consisting of the operations that are supported by the method to add the alert event to the whitelist.
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

export class DescribeSecurityEventOperationsResponseBodySecurityEventOperationsResponse extends $dara.Model {
  /**
   * @remarks
   * The objects on which the operations are performed. This parameter is required when you add the alert to the whitelist by configuring precise defense rules.
   */
  mappingMarkFields?: DescribeSecurityEventOperationsResponseBodySecurityEventOperationsResponseMappingMarkFields[];
  /**
   * @remarks
   * The configurations that are used when the value of the OperationCode parameter is **advance_mark_mis_info**.
   */
  markField?: DescribeSecurityEventOperationsResponseBodySecurityEventOperationsResponseMarkField[];
  /**
   * @remarks
   * The configuration items that can be used when the value of the OperationCode parameter is advance_mark_mis_info.
   */
  markFieldsSource?: DescribeSecurityEventOperationsResponseBodySecurityEventOperationsResponseMarkFieldsSource[];
  /**
   * @remarks
   * The operation that is performed to handle the alert. Valid values:
   * 
   * *   **block_ip**: blocks the source IP address.
   * *   **advance_mark_mis_info**: adds the alert to the whitelist.
   * *   **ignore**: ignores the alert.
   * *   **manual_handled**: marks the alert as manually handled.
   * *   **kill_process**: terminates the malicious process.
   * *   **cleanup**: performs in-depth virus detection and removal.
   * *   **kill_and_quara**: terminates the malicious process and quarantines the source file.
   * *   **disable_malicious_defense**: disables the malicious behavior defense feature.
   * *   **client_problem_check**: performs troubleshooting.
   * *   **quara**: quarantines the source file of the malicious process.
   * *   **defense_mark_mis_info**: enables the precise defense feature but disables the notification feature.
   * *   **rm_defense_mark_mis_info**: enables the notification feature.
   * *   **rm_mark_mis_info**: removes the alert from the whitelist.
   * *   **cancle_manual**: cancels marking the alert as manually handled.
   * 
   * @example
   * advance_mark_mis_info
   */
  operationCode?: string;
  /**
   * @remarks
   * The configuration of the operation that is performed to handle the alert.
   * 
   * >  If the value of the **OperationCode** parameter is **kill_and_quara** or **block_ip**, the OperationParams parameter is required. If the value of the **OperationCode** parameter is a different value, the OperationParams parameter can be left empty.
   * 
   * @example
   * {"expireTime":1641566807783}
   */
  operationParams?: string;
  /**
   * @remarks
   * Indicates whether you can handle the alert in the current edition of Security Center. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  userCanOperate?: boolean;
  static names(): { [key: string]: string } {
    return {
      mappingMarkFields: 'MappingMarkFields',
      markField: 'MarkField',
      markFieldsSource: 'MarkFieldsSource',
      operationCode: 'OperationCode',
      operationParams: 'OperationParams',
      userCanOperate: 'UserCanOperate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mappingMarkFields: { 'type': 'array', 'itemType': DescribeSecurityEventOperationsResponseBodySecurityEventOperationsResponseMappingMarkFields },
      markField: { 'type': 'array', 'itemType': DescribeSecurityEventOperationsResponseBodySecurityEventOperationsResponseMarkField },
      markFieldsSource: { 'type': 'array', 'itemType': DescribeSecurityEventOperationsResponseBodySecurityEventOperationsResponseMarkFieldsSource },
      operationCode: 'string',
      operationParams: 'string',
      userCanOperate: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.mappingMarkFields)) {
      $dara.Model.validateArray(this.mappingMarkFields);
    }
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

export class DescribeSecurityEventOperationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * B7A2000F-497E-5DA0-B14D-615CD410DD7E
   */
  requestId?: string;
  /**
   * @remarks
   * The operations that are performed to handle the alert.
   */
  securityEventOperationsResponse?: DescribeSecurityEventOperationsResponseBodySecurityEventOperationsResponse[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      securityEventOperationsResponse: 'SecurityEventOperationsResponse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      securityEventOperationsResponse: { 'type': 'array', 'itemType': DescribeSecurityEventOperationsResponseBodySecurityEventOperationsResponse },
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

