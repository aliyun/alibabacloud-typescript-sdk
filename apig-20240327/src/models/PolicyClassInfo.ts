// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PolicyClassInfo extends $dara.Model {
  alias?: string;
  attachableResourceTypes?: string[];
  classId?: string;
  configExample?: string;
  deprecated?: boolean;
  description?: string;
  direction?: string;
  enableLog?: boolean;
  executePriority?: string;
  executeStage?: string;
  name?: string;
  type?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'alias',
      attachableResourceTypes: 'attachableResourceTypes',
      classId: 'classId',
      configExample: 'configExample',
      deprecated: 'deprecated',
      description: 'description',
      direction: 'direction',
      enableLog: 'enableLog',
      executePriority: 'executePriority',
      executeStage: 'executeStage',
      name: 'name',
      type: 'type',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      attachableResourceTypes: { 'type': 'array', 'itemType': 'string' },
      classId: 'string',
      configExample: 'string',
      deprecated: 'boolean',
      description: 'string',
      direction: 'string',
      enableLog: 'boolean',
      executePriority: 'string',
      executeStage: 'string',
      name: 'string',
      type: 'string',
      version: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attachableResourceTypes)) {
      $dara.Model.validateArray(this.attachableResourceTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

