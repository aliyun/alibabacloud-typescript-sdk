// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ResourceLimit } from "./ResourceLimit";


export class DataJuicerConfig extends $dara.Model {
  commandType?: string;
  enableResourceEstimation?: boolean;
  executionMode?: string;
  resourceLimit?: ResourceLimit;
  static names(): { [key: string]: string } {
    return {
      commandType: 'CommandType',
      enableResourceEstimation: 'EnableResourceEstimation',
      executionMode: 'ExecutionMode',
      resourceLimit: 'ResourceLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandType: 'string',
      enableResourceEstimation: 'boolean',
      executionMode: 'string',
      resourceLimit: ResourceLimit,
    };
  }

  validate() {
    if(this.resourceLimit && typeof (this.resourceLimit as any).validate === 'function') {
      (this.resourceLimit as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

