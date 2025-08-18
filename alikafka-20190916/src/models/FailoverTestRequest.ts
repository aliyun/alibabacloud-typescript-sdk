// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FailoverTestRequest extends $dara.Model {
  configs?: string;
  description?: string;
  duration?: number;
  executeTime?: number;
  instanceId?: string;
  name?: string;
  regionId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      configs: 'Configs',
      description: 'Description',
      duration: 'Duration',
      executeTime: 'ExecuteTime',
      instanceId: 'InstanceId',
      name: 'Name',
      regionId: 'RegionId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configs: 'string',
      description: 'string',
      duration: 'number',
      executeTime: 'number',
      instanceId: 'string',
      name: 'string',
      regionId: 'string',
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

