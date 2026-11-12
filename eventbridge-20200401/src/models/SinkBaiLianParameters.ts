// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SinkBaiLianParametersAfter extends $dara.Model {
  /**
   * @remarks
   * The method used to generate the parameter value. Valid values: CONSTANT (constant), JSONPATH (extracted from the event content), and TEMPLATE (template).
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * The template string used to format the parameter value. It is used only when Form is set to TEMPLATE.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The source content of the parameter value specified by Form. When Form is set to JSONPATH, this value must be a JSONPath expression.
   * 
   * @example
   * example
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class SinkBaiLianParametersBefore extends $dara.Model {
  /**
   * @remarks
   * The method used to generate the parameter value. Valid values: CONSTANT (constant), JSONPATH (extracted from the event content), and TEMPLATE (template).
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * The template string used to format the parameter value. It is used only when Form is set to TEMPLATE.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The source content of the parameter value specified by Form. When Form is set to JSONPATH, this value must be a JSONPath expression.
   * 
   * @example
   * example
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class SinkBaiLianParametersOffset extends $dara.Model {
  /**
   * @remarks
   * The method used to generate the parameter value. Valid values: CONSTANT (constant), JSONPATH (extracted from the event content), and TEMPLATE (template).
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * The template string used to format the parameter value. It is used only when Form is set to TEMPLATE.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The source content of the parameter value specified by Form. When Form is set to JSONPATH, this value must be a JSONPath expression.
   * 
   * @example
   * example
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class SinkBaiLianParametersOp extends $dara.Model {
  /**
   * @remarks
   * The method used to generate the parameter value. Valid values: CONSTANT (constant), JSONPATH (extracted from the event content), and TEMPLATE (template).
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * The template string used to format the parameter value. It is used only when Form is set to TEMPLATE.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The source content of the parameter value specified by Form. When Form is set to JSONPATH, this value must be a JSONPath expression.
   * 
   * @example
   * example
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class SinkBaiLianParametersPartition extends $dara.Model {
  /**
   * @remarks
   * The method used to generate the parameter value. Valid values: CONSTANT (constant), JSONPATH (extracted from the event content), and TEMPLATE (template).
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * The template string used to format the parameter value. It is used only when Form is set to TEMPLATE.
   * 
   * @example
   * ${partition}
   */
  template?: string;
  /**
   * @remarks
   * The source content of the parameter value specified by Form. When Form is set to JSONPATH, this value must be a JSONPath expression.
   * 
   * @example
   * example
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class SinkBaiLianParameters extends $dara.Model {
  /**
   * @remarks
   * The post-processing logic executed after the main operation is completed.
   */
  after?: SinkBaiLianParametersAfter;
  /**
   * @remarks
   * The type of the Model Studio application to be invoked.
   * 
   * @example
   * KnowledgeBase
   */
  applicationType?: string;
  /**
   * @remarks
   * The pre-processing logic executed before the event is sent to the target.
   */
  before?: SinkBaiLianParametersBefore;
  /**
   * @remarks
   * The context information of the application, which must be a JSON object.
   * 
   * @example
   * {"k1":"v1"}
   */
  context?: any;
  /**
   * @remarks
   * The additional key-value pairs passed to the event target, which must be a valid JSON object.
   * 
   * @example
   * {"k1":"v1"}
   */
  extend?: any;
  /**
   * @remarks
   * The offset for reading the event from a stream or queue, which is used for stateful processing.
   */
  offset?: SinkBaiLianParametersOffset;
  /**
   * @remarks
   * The operation to be performed by the Model Studio application.
   */
  op?: SinkBaiLianParametersOp;
  /**
   * @remarks
   * The partition key of the event, which is used to route the event to a specific partition of the target service to ensure ordered processing.
   */
  partition?: SinkBaiLianParametersPartition;
  /**
   * @remarks
   * The unique ID of the Model Studio workspace.
   * 
   * @example
   * llm-a1b2c3d4e5f6g7h8
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      after: 'After',
      applicationType: 'ApplicationType',
      before: 'Before',
      context: 'Context',
      extend: 'Extend',
      offset: 'Offset',
      op: 'Op',
      partition: 'Partition',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      after: SinkBaiLianParametersAfter,
      applicationType: 'string',
      before: SinkBaiLianParametersBefore,
      context: 'any',
      extend: 'any',
      offset: SinkBaiLianParametersOffset,
      op: SinkBaiLianParametersOp,
      partition: SinkBaiLianParametersPartition,
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.after && typeof (this.after as any).validate === 'function') {
      (this.after as any).validate();
    }
    if(this.before && typeof (this.before as any).validate === 'function') {
      (this.before as any).validate();
    }
    if(this.offset && typeof (this.offset as any).validate === 'function') {
      (this.offset as any).validate();
    }
    if(this.op && typeof (this.op as any).validate === 'function') {
      (this.op as any).validate();
    }
    if(this.partition && typeof (this.partition as any).validate === 'function') {
      (this.partition as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

