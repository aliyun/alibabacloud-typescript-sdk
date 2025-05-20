// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLatestDeadLockAnalysisRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pc-bp1u5mas9exx7****
   */
  instanceId?: string;
  /**
   * @example
   * pi-bp16v3824rt73****
   */
  nodeId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      nodeId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

