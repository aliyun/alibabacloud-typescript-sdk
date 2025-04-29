// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDeployedApiResponseBodyRequestParametersRequestParameter extends $dara.Model {
  /**
   * @remarks
   * The name of the API parameter.
   * 
   * @example
   * age
   */
  apiParameterName?: string;
  /**
   * @remarks
   * The type of the array element.
   * 
   * @example
   * String
   */
  arrayItemsType?: string;
  /**
   * @remarks
   * The default value.
   * 
   * @example
   * 20
   */
  defaultValue?: string;
  /**
   * @remarks
   * Example
   * 
   * @example
   * 20
   */
  demoValue?: string;
  /**
   * @remarks
   * Description
   * 
   * @example
   * parameter description
   */
  description?: string;
  /**
   * @remarks
   * The order in the document.
   * 
   * @example
   * 0
   */
  docOrder?: number;
  /**
   * @remarks
   * Specifies whether the document is public. Valid values: PUBLIC and PRIVATE.
   * 
   * @example
   * PUBLIC
   */
  docShow?: string;
  /**
   * @remarks
   * The hash values that can be entered when ParameterType is set to Int, Long, Float, Double, or String. Separate different values with commas (,), such as 1,2,3,4,9 or A,B,C,E,F.
   * 
   * @example
   * boy,girl
   */
  enumValue?: string;
  /**
   * @remarks
   * JSON scheme
   * 
   * @example
   * {}
   */
  jsonScheme?: string;
  /**
   * @remarks
   * The parameter location. Valid values: BODY, HEAD, QUERY, and PATH.
   * 
   * @example
   * HEAD
   */
  location?: string;
  /**
   * @remarks
   * The maximum parameter length when ParameterType is set to String.
   * 
   * @example
   * 123456
   */
  maxLength?: number;
  /**
   * @remarks
   * The maximum parameter value when ParameterType is set to Int, Long, Float, or Double.
   * 
   * @example
   * 123456
   */
  maxValue?: number;
  /**
   * @remarks
   * The minimum parameter length when ParameterType is set to String.
   * 
   * @example
   * 123456
   */
  minLength?: number;
  /**
   * @remarks
   * The minimum parameter value when ParameterType is set to Int, Long, Float, or Double.
   * 
   * @example
   * 123456
   */
  minValue?: number;
  /**
   * @remarks
   * The type of a request parameter. Valid values: String, Int, Long, Float, Double, and Boolean.
   * 
   * @example
   * String
   */
  parameterType?: string;
  /**
   * @remarks
   * The regular expression used for parameter validation when ParameterType is set to String.
   * 
   * @example
   * xxx
   */
  regularExpression?: string;
  /**
   * @remarks
   * Indicates whether the parameter is required. Valid values: REQUIRED and OPTIONAL.
   * 
   * @example
   * OPTIONAL
   */
  required?: string;
  static names(): { [key: string]: string } {
    return {
      apiParameterName: 'ApiParameterName',
      arrayItemsType: 'ArrayItemsType',
      defaultValue: 'DefaultValue',
      demoValue: 'DemoValue',
      description: 'Description',
      docOrder: 'DocOrder',
      docShow: 'DocShow',
      enumValue: 'EnumValue',
      jsonScheme: 'JsonScheme',
      location: 'Location',
      maxLength: 'MaxLength',
      maxValue: 'MaxValue',
      minLength: 'MinLength',
      minValue: 'MinValue',
      parameterType: 'ParameterType',
      regularExpression: 'RegularExpression',
      required: 'Required',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiParameterName: 'string',
      arrayItemsType: 'string',
      defaultValue: 'string',
      demoValue: 'string',
      description: 'string',
      docOrder: 'number',
      docShow: 'string',
      enumValue: 'string',
      jsonScheme: 'string',
      location: 'string',
      maxLength: 'number',
      maxValue: 'number',
      minLength: 'number',
      minValue: 'number',
      parameterType: 'string',
      regularExpression: 'string',
      required: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

