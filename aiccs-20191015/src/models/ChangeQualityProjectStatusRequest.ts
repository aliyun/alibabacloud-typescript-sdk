// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeQualityProjectStatusRequest extends $dara.Model {
  /**
   * @remarks
   * Instance ID of the AICCS instance. You can obtain instance ID from the Artificial Intelligence Cloud Call Service console.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre***
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the quality inspection task.
   * 
   * This parameter is required.
   * 
   * @example
   * 15
   */
  projectId?: number;
  /**
   * @remarks
   * The status of the quality inspection task. Valid values:
   * - **0**: Start.
   * - **1**: Stop.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      projectId: 'ProjectId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      projectId: 'number',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

