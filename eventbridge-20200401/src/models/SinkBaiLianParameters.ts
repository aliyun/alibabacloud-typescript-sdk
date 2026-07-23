// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SinkBaiLianParametersAfter extends $dara.Model {
  /**
   * @remarks
   * The method for generating the value. The `JSONPATH` option extracts data from the event payload. Valid values: `CONSTANT`, `JSONPATH`, and `TEMPLATE`.
   */
  form?: string;
  /**
   * @remarks
   * The template string for formatting the value. This parameter is used only when `Form` is set to `TEMPLATE`.
   */
  template?: string;
  /**
   * @remarks
   * The source content for the value, as specified by the `Form` parameter. For example, if `Form` is `JSONPATH`, this value must be a JSONPath expression.
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
   * The method for generating the value. The `JSONPATH` option extracts data from the event payload. Valid values: `CONSTANT`, `JSONPATH`, and `TEMPLATE`.
   */
  form?: string;
  /**
   * @remarks
   * The template string for formatting the value. This parameter is used only when `Form` is set to `TEMPLATE`.
   */
  template?: string;
  /**
   * @remarks
   * The source content for the value, as specified by the `Form` parameter. For example, if `Form` is `JSONPATH`, this value must be a JSONPath expression.
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
   * The method for generating the value. The `JSONPATH` option extracts data from the event payload. Valid values: `CONSTANT`, `JSONPATH`, and `TEMPLATE`.
   */
  form?: string;
  /**
   * @remarks
   * The template string for formatting the value. This parameter is used only when `Form` is set to `TEMPLATE`.
   */
  template?: string;
  /**
   * @remarks
   * The source content for the value, as specified by the `Form` parameter. For example, if `Form` is `JSONPATH`, this value must be a JSONPath expression.
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
   * The method for generating the value. The `JSONPATH` option extracts data from the event payload. Valid values: `CONSTANT`, `JSONPATH`, and `TEMPLATE`.
   */
  form?: string;
  /**
   * @remarks
   * The template string for formatting the value. This parameter is used only when `Form` is set to `TEMPLATE`.
   */
  template?: string;
  /**
   * @remarks
   * The source content for the value, as specified by the `Form` parameter. For example, if `Form` is `JSONPATH`, this value must be a JSONPath expression.
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
   * The method for generating the value. The `JSONPATH` option extracts data from the event payload. Valid values: `CONSTANT`, `JSONPATH`, and `TEMPLATE`.
   */
  form?: string;
  /**
   * @remarks
   * The template string for formatting the value. This parameter is used only when `Form` is set to `TEMPLATE`.
   */
  template?: string;
  /**
   * @remarks
   * The source content for the value, as specified by the `Form` parameter. For example, if `Form` is `JSONPATH`, this value must be a JSONPath expression.
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
   * The post-processing logic that runs after the main operation completes.
   */
  after?: SinkBaiLianParametersAfter;
  /**
   * @remarks
   * The type of the Model Studio application to invoke.
   */
  applicationType?: string;
  /**
   * @remarks
   * The pre-processing logic to apply to an event before it is sent to the target.
   */
  before?: SinkBaiLianParametersBefore;
  /**
   * @remarks
   * Context information for the application. The value must be a JSON object.
   */
  context?: any;
  /**
   * @remarks
   * Additional key-value pairs to pass to the target. The value must be a valid JSON object.
   */
  extend?: any;
  /**
   * @remarks
   * The offset for reading events from a stream or queue, used for stateful processing.
   */
  offset?: SinkBaiLianParametersOffset;
  /**
   * @remarks
   * The operation that the Model Studio application will perform.
   */
  op?: SinkBaiLianParametersOp;
  /**
   * @remarks
   * The partition key for the event. This key routes events to a specific partition in the target service, ensuring ordered processing.
   */
  partition?: SinkBaiLianParametersPartition;
  /**
   * @remarks
   * The unique ID of the Model Studio workspace.
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

