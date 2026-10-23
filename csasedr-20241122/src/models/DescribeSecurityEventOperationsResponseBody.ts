// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSecurityEventOperationsResponseBodySecurityEventOperationsResponseMappingMarkFields extends $dara.Model {
  /**
   * @remarks
   * The description of the precise defense whitelist handling.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether the current whitelist field value can be changed. Valid values:
   * - **CUSTOM**: The value can be changed.
   * - **SYSTEM**: The value cannot be changed.
   * 
   * @example
   * CUSTOM
   */
  fillType?: string;
  /**
   * @remarks
   * The generic compatibility filter expression field. The current query implementation does not assign a value to it, and the current query pipeline does not populate the MappingMarkFields elements. You should not use this field to infer the actual filter conditions of the operation.
   * 
   * @example
   * event.detailData.ope_type == \\"execute\\"
   */
  filterExpression?: string;
  /**
   * @remarks
   * The generic compatibility field that indicates the mapping name of the whitelist interaction configuration. The current query implementation does not assign a value to it, and the current query pipeline does not populate the MappingMarkFields elements.
   * 
   * @example
   * actionType
   */
  mappingName?: string;
  /**
   * @remarks
   * The maximum length of the content filled in the precise defense whitelist handling information.
   * 
   * @example
   * 2048
   */
  maxLength?: number;
  /**
   * @remarks
   * The minimum length of the content filled in the precise defense whitelist handling information.
   * 
   * @example
   * 1024
   */
  minLength?: number;
  /**
   * @remarks
   * The name of the field that supports whitelisting in precise defense.
   * 
   * @example
   * pid
   */
  name?: string;
  /**
   * @remarks
   * Specifies whether the field is required. Valid values:
   * - **true**: Required.
   * - **false**: Optional.
   */
  required?: boolean;
  /**
   * @remarks
   * The display name of the whitelist field for which whitelist rules can be configured.
   * 
   * @example
   * pid
   */
  showName?: string;
  /**
   * @remarks
   * The display text of the generic mapping field value, which is different from the field display name indicated by ShowName. The current query pipeline does not populate the MappingMarkFields elements.
   * 
   * @example
   * 1791
   */
  showValue?: string;
  /**
   * @remarks
   * The value of the field that supports whitelisting in precise defense.
   * 
   * @example
   * 1791
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      fillType: 'FillType',
      filterExpression: 'FilterExpression',
      mappingName: 'MappingName',
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
      filterExpression: 'string',
      mappingName: 'string',
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
   * The default value of the compatible retained field. The current query implementation of this operation does not assign a value to this field. You should not interpret the example value as a fixed return or default configurations. To obtain the actual matching value of a saved rule, read MarkMisValue.
   * 
   * @example
   * 0
   */
  defaultValue?: string;
  /**
   * @remarks
   * The display name of the configured whitelist rule field. The server generates it based on the current alert template and language. If the template information is missing, it is returned based on the field rendering logic.
   * 
   * @example
   * cmd
   */
  filedAliasName?: string;
  /**
   * @remarks
   * The field identifier of the configured whitelist rule, which is derived from the saved rule field and is not the field display name.
   * 
   * @example
   * cmd
   */
  filedName?: string;
  /**
   * @remarks
   * The matching operator selected for the configured whitelist rule, which is not wildcard text. New saved rules should use the operators returned in MarkFieldsSource.SupportedMisType for the corresponding field. You should not treat the examples or the shared enumeration full set as the set supported by all fields.
   * 
   * @example
   * strEqual
   */
  markMisType?: string;
  /**
   * @remarks
   * The matching value saved for the configured whitelist rule, which should be interpreted together with the FiledName and MarkMisType of the same rule. It is not the name of the matching operator.
   * 
   * @example
   * ls
   */
  markMisValue?: string;
  /**
   * @remarks
   * The list of matching operators returned for the configured rule field. If a corresponding alert template exists, the template configuration is used. If the template field is missing, it falls back to the shared operator set. When adding or modifying a rule, you must still use the operators allowed for the field in the current MarkFieldsSource.
   */
  supportedMisType?: string[];
  /**
   * @remarks
   * **[Deprecated]** The effective scope of the rule should be understood in combination with the rule and its assetScope configuration. Do not use this field to replace assetScope.
   * 
   * @example
   * 3d6b4a75-c28f-447b-9142-38f6252c****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      defaultValue: 'DefaultValue',
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
      defaultValue: 'string',
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
   * The default value of the compatible retained field. The current query implementation of this operation does not assign a value to this field. You should not interpret the example value as a fixed return or default configurations. To obtain the candidate matching values used for whitelisting in the alerting details, read MarkMisValue.
   * 
   * @example
   * 0
   */
  defaultValue?: string;
  /**
   * @remarks
   * The display name of the field available for whitelisting, which is rendered and generated by the current alert template based on the language.
   * 
   * @example
   * cmd
   */
  filedAliasName?: string;
  /**
   * @remarks
   * The field identifier available for whitelisting for the current alert, which is parsed from the alert template. When configuring rules subsequently, you should use the field identifier actually returned in this response.
   * 
   * @example
   * cmd
   */
  filedName?: string;
  /**
   * @remarks
   * The candidate matching value parsed by the server from the current alert details, which can be used to construct the whitelist rule for the field. It is not the name of the matching operator. The matching method of the actual rule must also be selected in combination with the corresponding SupportedMisType.
   * 
   * @example
   * ls
   */
  markMisValue?: string;
  /**
   * @remarks
   * The list of matching operators allowed for the field by the current alert template. When configuring a whitelist rule, the selected operator must belong to the list actually returned for the field in this response. You cannot select it solely based on document examples or the shared enumeration full set.
   */
  supportedMisType?: string[];
  static names(): { [key: string]: string } {
    return {
      defaultValue: 'DefaultValue',
      filedAliasName: 'FiledAliasName',
      filedName: 'FiledName',
      markMisValue: 'MarkMisValue',
      supportedMisType: 'SupportedMisType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultValue: 'string',
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
   * The list of generic compatibility mapping fields for precise defense whitelisting. Only the generic operation branches with the accurate_defense_mark_miss prefix populate this list. The current security operation set does not include such operations, so the current query pipeline does not populate its elements. Its subfields and examples are only used to retain the generic structure definition and do not represent the currently supported whitelisting capabilities.
   */
  mappingMarkFields?: DescribeSecurityEventOperationsResponseBodySecurityEventOperationsResponseMappingMarkFields[];
  /**
   * @remarks
   * The list of configured whitelist rule information corresponding to the current alert. The current implementation queries and populates this list in the advance_mark_mis_info and defense_mark_mis_info operation items. It can be empty when no matching rules exist.
   */
  markField?: DescribeSecurityEventOperationsResponseBodySecurityEventOperationsResponseMarkField[];
  /**
   * @remarks
   * The list of fields available for whitelisting and their matching capabilities for the current alert. The current implementation queries and populates this list in the advance_mark_mis_info and defense_mark_mis_info operation items. The specific fields, candidate matching values, and SupportedMisType are generated based on the current alert template and details, and are not a unified and fixed set for all endpoints or alerts.
   */
  markFieldsSource?: DescribeSecurityEventOperationsResponseBodySecurityEventOperationsResponseMarkFieldsSource[];
  /**
   * @remarks
   * The code of the endpoint alert handling operation. The current security operation set is as follows:
   * 
   * - `advance_mark_mis_info`: Advanced whitelisting.
   * - `defense_mark_mis_info`: Precise defense whitelisting.
   * - `mark_mis_info`: Standard whitelisting.
   * - `rm_mark_mis_info`: Cancel standard whitelisting.
   * - `rm_defense_mark_mis_info`: Cancel precise defense whitelisting.
   * - `ignore`: Ignore.
   * - `manual_handled`: Manually handled.
   * - `cancle_manual`: Cancel manually handled.
   * 
   * This list is the upper limit of the security scope and does not mean that every alert returns all operations. The actual returned results are also affected by feature switches, canary releases, dynamic allowlists, alert templates, statuses, and filter conditions. You should determine whether execution is allowed based on UserCanOperate. cancle_manual is the historical spelling used by the operation and must remain unchanged when called.
   * 
   * @example
   * advance_mark_mis_info
   */
  operationCode?: string;
  /**
   * @remarks
   * The configuration parameters of the current handling operation, represented as a JSON string. The server returns it after querying based on the alert operation configuration. If no parameter query is configured, this field can be empty. When initiating a subsequent response, you should use it in combination with the corresponding OperationCode and the parameter requirements of the response operation.
   * 
   * The example only demonstrates the string format of an empty JSON object. It does not mean that an empty object is fixedly returned when no query is configured, nor does it represent the mandatory requirements for a response request.
   * 
   * @example
   * {}
   */
  operationParams?: string;
  /**
   * @remarks
   * Specifies whether the version permissions of the current account and endpoint allow the execution of the operation. It is determined based on the sales permissions corresponding to SASE-EDR. Valid values:
   * 
   * - `true`: Allowed.
   * - `false`: Not allowed.
   * 
   * You should use it in combination with the actually returned operation items. This flag does not guarantee that the subsequent response will definitely succeed.
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
   * The ID of the request. It is a unique identifier generated by Alibaba Cloud for the request and can be used for troubleshooting.
   * 
   * @example
   * B7A2000F-497E-5DA0-B14D-615CD410DD7E
   */
  requestId?: string;
  /**
   * @remarks
   * The list of handling operations corresponding to the current endpoint alert.
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

