// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApplicationParametersResponseBodyParameterTemplatesComponentParameterTemplatesParameters extends $dara.Model {
  /**
   * @example
   * default
   */
  default?: string;
  /**
   * @example
   * The name of the parameter
   */
  description?: string;
  /**
   * @example
   * name
   */
  name?: string;
  /**
   * @example
   * false
   */
  needRestart?: boolean;
  /**
   * @example
   * ^[a-zA-Z0-9]{1,20}$
   */
  pattern?: string;
  /**
   * @example
   * false
   */
  readOnly?: boolean;
  /**
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
   * @example
   * pac-**************
   */
  componentId?: string;
  /**
   * @example
   * supabase
   */
  componentType?: string;
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
   * @example
   * default value
   */
  default?: string;
  /**
   * @example
   * The name of the parameter
   */
  description?: string;
  /**
   * @example
   * name
   */
  name?: string;
  /**
   * @example
   * false
   */
  needRestart?: boolean;
  /**
   * @example
   * ^[a-zA-Z0-9]{1,20}$
   */
  pattern?: string;
  /**
   * @example
   * false
   */
  readOnly?: boolean;
  /**
   * @example
   * Applied
   */
  status?: string;
  /**
   * @example
   * string
   */
  type?: string;
  /**
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
   * @example
   * pac-**************
   */
  componentId?: string;
  /**
   * @example
   * supabase
   */
  componentType?: string;
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
  parameterTemplates?: DescribeApplicationParametersResponseBodyParameterTemplates;
  parameters?: DescribeApplicationParametersResponseBodyParameters;
  /**
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

