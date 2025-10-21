// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class NodeExecutionStatusDTO extends $dara.Model {
  executionId?: string;
  namespace?: string;
  resourceId?: string;
  status?: string;
  type?: string;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      executionId: 'executionId',
      namespace: 'namespace',
      resourceId: 'resourceId',
      status: 'status',
      type: 'type',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executionId: 'string',
      namespace: 'string',
      resourceId: 'string',
      status: 'string',
      type: 'string',
      workspace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

