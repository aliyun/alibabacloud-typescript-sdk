// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class SinkBaiLianParametersAfter extends $dara.Model {
  form?: string;
  template?: string;
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
  form?: string;
  template?: string;
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
  form?: string;
  template?: string;
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
  form?: string;
  template?: string;
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
  form?: string;
  template?: string;
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
  after?: SinkBaiLianParametersAfter;
  applicationType?: string;
  before?: SinkBaiLianParametersBefore;
  context?: any;
  extend?: any;
  offset?: SinkBaiLianParametersOffset;
  op?: SinkBaiLianParametersOp;
  partition?: SinkBaiLianParametersPartition;
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

