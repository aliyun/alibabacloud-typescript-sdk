// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelExecutionRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the execution.
   * 
   * This parameter is required.
   * 
   * @example
   * exec-xxx
   */
  executionId?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      executionId: 'ExecutionId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executionId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

