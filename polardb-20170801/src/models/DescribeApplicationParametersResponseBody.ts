// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApplicationParametersResponseBodyParameterTemplatesComponentParameterTemplatesParameters extends $dara.Model {
  /**
   * @remarks
   * The default value of the parameter.
   * 
   * @example
   * default
   */
  default?: string;
  /**
   * @remarks
   * The parameter description.
   * 
   * @example
   * The name of the parameter
   */
  description?: string;
  /**
   * @remarks
   * The parameter name.
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether the application needs to be restarted after you modify the parameter.
   * 
   * @example
   * false
   */
  needRestart?: boolean;
  /**
   * @remarks
   * The regular expression for the parameter.
   * 
   * @example
   * ^[a-zA-Z0-9]{1,20}$
   */
  pattern?: string;
  /**
   * @remarks
   * Indicates whether the parameter is read-only.
   * 
   * @example
   * false
   */
  readOnly?: boolean;
  /**
   * @remarks
   * The parameter type.
   * 
   * @example
   * string
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      default: 'Default',
      description: 'Description',
      name: 'Name',
      needRestart: 'NeedRestart',
      pattern: 'Pattern',
      readOnly: 'ReadOnly',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      default: 'string',
      description: 'string',
      name: 'string',
      needRestart: 'boolean',
      pattern: 'string',
      readOnly: 'boolean',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationParametersResponseBodyParameterTemplatesComponentParameterTemplates extends $dara.Model {
  /**
   * @remarks
   * The subcomponent ID or application ID.
   * 
   * @example
   * pac-**************
   */
  componentId?: string;
  /**
   * @remarks
   * The type of the subcomponent.
   * 
   * @example
   * supabase
   */
  componentType?: string;
  /**
   * @remarks
   * A list of parameter template details.
   */
  parameters?: DescribeApplicationParametersResponseBodyParameterTemplatesComponentParameterTemplatesParameters[];
  static names(): { [key: string]: string } {
    return {
      componentId: 'ComponentId',
      componentType: 'ComponentType',
      parameters: 'Parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentId: 'string',
      componentType: 'string',
      parameters: { 'type': 'array', 'itemType': DescribeApplicationParametersResponseBodyParameterTemplatesComponentParameterTemplatesParameters },
    };
  }

  validate() {
    if(Array.isArray(this.parameters)) {
      $dara.Model.validateArray(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationParametersResponseBodyParameterTemplates extends $dara.Model {
  /**
   * @remarks
   * A list of subcomponents that contain lists of parameter template details.
   */
  componentParameterTemplates?: DescribeApplicationParametersResponseBodyParameterTemplatesComponentParameterTemplates[];
  static names(): { [key: string]: string } {
    return {
      componentParameterTemplates: 'ComponentParameterTemplates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentParameterTemplates: { 'type': 'array', 'itemType': DescribeApplicationParametersResponseBodyParameterTemplatesComponentParameterTemplates },
    };
  }

  validate() {
    if(Array.isArray(this.componentParameterTemplates)) {
      $dara.Model.validateArray(this.componentParameterTemplates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationParametersResponseBodyParametersComponentParametersParameters extends $dara.Model {
  /**
   * @remarks
   * The default value of the parameter.
   * 
   * @example
   * default value
   */
  default?: string;
  /**
   * @remarks
   * The parameter description.
   * 
   * @example
   * The name of the parameter
   */
  description?: string;
  /**
   * @remarks
   * The parameter name.
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether the application needs to be restarted after you modify the parameter.
   * 
   * @example
   * false
   */
  needRestart?: boolean;
  /**
   * @remarks
   * The regular expression for the parameter.
   * 
   * @example
   * ^[a-zA-Z0-9]{1,20}$
   */
  pattern?: string;
  /**
   * @remarks
   * Indicates whether the parameter is read-only.
   * 
   * @example
   * false
   */
  readOnly?: boolean;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * Applied
   */
  status?: string;
  /**
   * @remarks
   * The parameter type.
   * 
   * @example
   * string
   */
  type?: string;
  /**
   * @remarks
   * The current value of the parameter.
   * 
   * @example
   * value
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      default: 'Default',
      description: 'Description',
      name: 'Name',
      needRestart: 'NeedRestart',
      pattern: 'Pattern',
      readOnly: 'ReadOnly',
      status: 'Status',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      default: 'string',
      description: 'string',
      name: 'string',
      needRestart: 'boolean',
      pattern: 'string',
      readOnly: 'boolean',
      status: 'string',
      type: 'string',
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

export class DescribeApplicationParametersResponseBodyParametersComponentParameters extends $dara.Model {
  /**
   * @remarks
   * The subcomponent ID or application ID.
   * 
   * @example
   * pac-**************
   */
  componentId?: string;
  /**
   * @remarks
   * The type of the subcomponent.
   * 
   * @example
   * supabase
   */
  componentType?: string;
  /**
   * @remarks
   * A list of parameter details.
   */
  parameters?: DescribeApplicationParametersResponseBodyParametersComponentParametersParameters[];
  static names(): { [key: string]: string } {
    return {
      componentId: 'ComponentId',
      componentType: 'ComponentType',
      parameters: 'Parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentId: 'string',
      componentType: 'string',
      parameters: { 'type': 'array', 'itemType': DescribeApplicationParametersResponseBodyParametersComponentParametersParameters },
    };
  }

  validate() {
    if(Array.isArray(this.parameters)) {
      $dara.Model.validateArray(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationParametersResponseBodyParameters extends $dara.Model {
  /**
   * @remarks
   * A list of subcomponents that contain lists of parameter details.
   */
  componentParameters?: DescribeApplicationParametersResponseBodyParametersComponentParameters[];
  static names(): { [key: string]: string } {
    return {
      componentParameters: 'ComponentParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentParameters: { 'type': 'array', 'itemType': DescribeApplicationParametersResponseBodyParametersComponentParameters },
    };
  }

  validate() {
    if(Array.isArray(this.componentParameters)) {
      $dara.Model.validateArray(this.componentParameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationParametersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the parameter template.
   */
  parameterTemplates?: DescribeApplicationParametersResponseBodyParameterTemplates;
  /**
   * @remarks
   * The parameter details.
   */
  parameters?: DescribeApplicationParametersResponseBodyParameters;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3E5CD764-FCCA-5C9C-838E-20E0DE84B2AF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      parameterTemplates: 'ParameterTemplates',
      parameters: 'Parameters',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterTemplates: DescribeApplicationParametersResponseBodyParameterTemplates,
      parameters: DescribeApplicationParametersResponseBodyParameters,
      requestId: 'string',
    };
  }

  validate() {
    if(this.parameterTemplates && typeof (this.parameterTemplates as any).validate === 'function') {
      (this.parameterTemplates as any).validate();
    }
    if(this.parameters && typeof (this.parameters as any).validate === 'function') {
      (this.parameters as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

