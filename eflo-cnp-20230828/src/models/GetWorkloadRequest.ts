// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkloadRequest extends $dara.Model {
  /**
   * @remarks
   * Workload ID
   * 
   * This parameter is required.
   * 
   * @example
   * 13
   */
  workloadId?: number;
  static names(): { [key: string]: string } {
    return {
      workloadId: 'WorkloadId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workloadId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

