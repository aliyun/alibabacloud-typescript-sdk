// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLatestRecordSchemaResponseBodyPlaybookNodeSchemaNodeSchema extends $dara.Model {
  /**
   * @remarks
   * The action name of the component.
   * 
   * @example
   * formatedata
   */
  actionName?: string;
  /**
   * @remarks
   * The name of the component.
   * 
   * @example
   * DataFormat
   */
  componentName?: string;
  /**
   * @remarks
   * The name of the node.
   * 
   * @example
   * DataFormat_1
   */
  nodeName?: string;
  /**
   * @remarks
   * The output fields.
   */
  outputFields?: string[];
  static names(): { [key: string]: string } {
    return {
      actionName: 'ActionName',
      componentName: 'ComponentName',
      nodeName: 'NodeName',
      outputFields: 'OutputFields',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionName: 'string',
      componentName: 'string',
      nodeName: 'string',
      outputFields: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.outputFields)) {
      $dara.Model.validateArray(this.outputFields);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLatestRecordSchemaResponseBodyPlaybookNodeSchema extends $dara.Model {
  /**
   * @remarks
   * The structure information.
   */
  nodeSchema?: DescribeLatestRecordSchemaResponseBodyPlaybookNodeSchemaNodeSchema[];
  static names(): { [key: string]: string } {
    return {
      nodeSchema: 'NodeSchema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeSchema: { 'type': 'array', 'itemType': DescribeLatestRecordSchemaResponseBodyPlaybookNodeSchemaNodeSchema },
    };
  }

  validate() {
    if(Array.isArray(this.nodeSchema)) {
      $dara.Model.validateArray(this.nodeSchema);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLatestRecordSchemaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The output structure information of the playbook.
   */
  playbookNodeSchema?: DescribeLatestRecordSchemaResponseBodyPlaybookNodeSchema;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 10B92EE1-4597-593B-A131-7A17D25EF5C9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      playbookNodeSchema: 'PlaybookNodeSchema',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      playbookNodeSchema: DescribeLatestRecordSchemaResponseBodyPlaybookNodeSchema,
      requestId: 'string',
    };
  }

  validate() {
    if(this.playbookNodeSchema && typeof (this.playbookNodeSchema as any).validate === 'function') {
      (this.playbookNodeSchema as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

