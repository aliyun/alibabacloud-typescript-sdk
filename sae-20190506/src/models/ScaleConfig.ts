// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScaleConfig extends $dara.Model {
  alwaysAllocateCPU?: boolean;
  maximumInstanceCount?: number;
  minimumInstanceCount?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      alwaysAllocateCPU: 'alwaysAllocateCPU',
      maximumInstanceCount: 'maximumInstanceCount',
      minimumInstanceCount: 'minimumInstanceCount',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alwaysAllocateCPU: 'boolean',
      maximumInstanceCount: 'number',
      minimumInstanceCount: 'number',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

