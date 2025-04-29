// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApiDocResponseBodyRequestParametersRequestParameter extends $dara.Model {
  /**
   * @remarks
   * The name of the parameter in the API request.
   * 
   * @example
   * Length
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
   * The example value.
   * 
   * @example
   * 20
   */
  demoValue?: string;
  /**
   * @remarks
   * The parameter description.
   * 
   * @example
   * Parameters
   */
  description?: string;
  /**
   * @remarks
   * The order in which the parameter is sorted in the document.
   * 
   * @example
   * 0
   */
  docOrder?: number;
  /**
   * @remarks
   * Indicates whether the document is public. Valid values: **PUBLIC** and **PRIVATE**.
   * 
   * @example
   * PUBLIC
   */
  docShow?: string;
  /**
   * @remarks
   * The hash values that are supported when **ParameterType** is set to Int, Long, Float, Double, or String. Separate values with commas (,). Examples: 1,2,3,4,9 and A,B,C,E,F.
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
   * The maximum length.
   * 
   * @example
   * 123456
   */
  maxLength?: number;
  /**
   * @remarks
   * The maximum value.
   * 
   * @example
   * 200
   */
  maxValue?: number;
  /**
   * @remarks
   * The minimum length.
   * 
   * @example
   * 2
   */
  minLength?: number;
  /**
   * @remarks
   * The minimum value.
   * 
   * @example
   * 123456
   */
  minValue?: number;
  /**
   * @remarks
   * The data type of the parameter.
   * 
   * @example
   * String
   */
  parameterType?: string;
  /**
   * @remarks
   * The regular expression that is used for parameter validation when **ParameterType** is set to String.
   * 
   * @example
   * xxx
   */
  regularExpression?: string;
  /**
   * @remarks
   * Indicates whether the parameter is required.
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

