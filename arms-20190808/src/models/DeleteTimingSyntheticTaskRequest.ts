// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteTimingSyntheticTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-aek2eq4peca****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the synthetic monitoring task.
   * 
   * @example
   * 5308a2691f59422c8c3b7aeccec9cd3b
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceGroupId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

