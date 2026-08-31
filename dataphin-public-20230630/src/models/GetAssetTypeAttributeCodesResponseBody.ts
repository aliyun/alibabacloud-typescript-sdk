// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAssetTypeAttributeCodesResponseBodyDataEnumValues extends $dara.Model {
  /**
   * @remarks
   * The display name of the option.
   * 
   * @example
   * Core
   */
  displayName?: string;
  /**
   * @remarks
   * The option value.
   * 
   * @example
   * L1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
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

export class GetAssetTypeAttributeCodesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The property code (unique identifier).
   * 
   * @example
   * data_level
   */
  attributeCode?: string;
  /**
   * @remarks
   * The property name (display name).
   * 
   * @example
   * Data level
   */
  attributeName?: string;
  /**
   * @remarks
   * The property source. Valid values:
   * - SYSTEM: system preset.
   * - CUSTOM: custom.
   * 
   * @example
   * CUSTOM
   */
  attributeSource?: string;
  /**
   * @remarks
   * The property type. Valid values:
   * - MANAGEMENT: management property.
   * - TECHNICAL: technical property.
   * - BUSINESS: business property.
   * 
   * @example
   * MANAGEMENT
   */
  attributeType?: string;
  /**
   * @remarks
   * The property description.
   * 
   * @example
   * Data asset level classification
   */
  description?: string;
  /**
   * @remarks
   * The location where the property can be edited. Valid values:
   * - ASSET: asset catalog.
   * - DEVELOPMENT: development.
   */
  editableIn?: string[];
  /**
   * @remarks
   * The source of dropdown options. Valid values:
   * - MANUAL: manual input.
   * - SYSTEM_REFERENCE: reference to a system property.
   * 
   * @example
   * MANUAL
   */
  enumSourceType?: string;
  /**
   * @remarks
   * The list of dropdown options. This parameter has a value only when EnumSourceType is set to MANUAL.
   */
  enumValues?: GetAssetTypeAttributeCodesResponseBodyDataEnumValues[];
  /**
   * @remarks
   * The input mode. Valid values:
   * - CUSTOM_INPUT: custom input.
   * - DROPDOWN_SINGLE: single-select dropdown.
   * - DROPDOWN_MULTI: multi-select dropdown.
   * - HYPERLINK: hyperlink.
   * 
   * @example
   * DROPDOWN_SINGLE
   */
  inputMode?: string;
  /**
   * @remarks
   * The hyperlink navigation method. This parameter has a value only when InputMode is set to HYPERLINK. Valid values:
   * - CURRENT_PAGE: opens in the current page.
   * - NEW_PAGE: opens in a new page.
   * 
   * @example
   * NEW_PAGE
   */
  linkTarget?: string;
  /**
   * @remarks
   * The maximum length. This parameter is valid only when ValueType is set to STRING.
   * 
   * @example
   * 1000
   */
  maxLength?: number;
  /**
   * @remarks
   * Indicates whether the property is required.
   */
  required?: boolean;
  /**
   * @remarks
   * The type of the referenced system property. This parameter has a value only when EnumSourceType is set to SYSTEM_REFERENCE.
   * 
   * @example
   * USER
   */
  systemReferenceType?: string;
  /**
   * @remarks
   * The data type of the property value.
   * 
   * @example
   * STRING
   */
  valueType?: string;
  /**
   * @remarks
   * The location where the property is visible. Valid values:
   * - ASSET: asset catalog.
   * - DEVELOPMENT: development.
   */
  visibleIn?: string[];
  static names(): { [key: string]: string } {
    return {
      attributeCode: 'AttributeCode',
      attributeName: 'AttributeName',
      attributeSource: 'AttributeSource',
      attributeType: 'AttributeType',
      description: 'Description',
      editableIn: 'EditableIn',
      enumSourceType: 'EnumSourceType',
      enumValues: 'EnumValues',
      inputMode: 'InputMode',
      linkTarget: 'LinkTarget',
      maxLength: 'MaxLength',
      required: 'Required',
      systemReferenceType: 'SystemReferenceType',
      valueType: 'ValueType',
      visibleIn: 'VisibleIn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeCode: 'string',
      attributeName: 'string',
      attributeSource: 'string',
      attributeType: 'string',
      description: 'string',
      editableIn: { 'type': 'array', 'itemType': 'string' },
      enumSourceType: 'string',
      enumValues: { 'type': 'array', 'itemType': GetAssetTypeAttributeCodesResponseBodyDataEnumValues },
      inputMode: 'string',
      linkTarget: 'string',
      maxLength: 'number',
      required: 'boolean',
      systemReferenceType: 'string',
      valueType: 'string',
      visibleIn: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.editableIn)) {
      $dara.Model.validateArray(this.editableIn);
    }
    if(Array.isArray(this.enumValues)) {
      $dara.Model.validateArray(this.enumValues);
    }
    if(Array.isArray(this.visibleIn)) {
      $dara.Model.validateArray(this.visibleIn);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAssetTypeAttributeCodesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The backend response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The list of property definitions.
   */
  data?: GetAssetTypeAttributeCodesResponseBodyData[];
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The backend exception details.
   * 
   * @example
   * internal error
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
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
      code: 'string',
      data: { 'type': 'array', 'itemType': GetAssetTypeAttributeCodesResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

