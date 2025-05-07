// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BuildPipelineDeployConfig extends $dara.Model {
  alwaysAllocateCPU?: boolean;
  maximumInstanceCount?: number;
  minimumInstanceCount?: number;
  updateApplicationInput?: string;
  updateTraffic?: boolean;
  static names(): { [key: string]: string } {
    return {
      alwaysAllocateCPU: 'AlwaysAllocateCPU',
      maximumInstanceCount: 'MaximumInstanceCount',
      minimumInstanceCount: 'MinimumInstanceCount',
      updateApplicationInput: 'UpdateApplicationInput',
      updateTraffic: 'UpdateTraffic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alwaysAllocateCPU: 'boolean',
      maximumInstanceCount: 'number',
      minimumInstanceCount: 'number',
      updateApplicationInput: 'string',
      updateTraffic: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

