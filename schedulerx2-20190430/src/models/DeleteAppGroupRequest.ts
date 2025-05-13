// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAppGroupRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to delete the jobs in the application group. Valid values:
   * 
   * true: deletes the jobs in the application group.
   * false: does not delete the jobs in the application group.
   * 
   * @example
   * true
   */
  deleteJobs?: boolean;
  /**
   * @remarks
   * The ID of the application. You can obtain the ID of the application on the Application Management page in the SchedulerX console.
   * 
   * This parameter is required.
   * 
   * @example
   * testSchedulerx.defaultGroup
   */
  groupId?: string;
  /**
   * @remarks
   * The ID of the namespace. You can obtain the ID of the namespace on the Namespace page in the SchedulerX console.
   * 
   * This parameter is required.
   * 
   * @example
   * adcfc35d-e2fe-4fe9-bbaa-20e90ffc****
   */
  namespace?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      deleteJobs: 'DeleteJobs',
      groupId: 'GroupId',
      namespace: 'Namespace',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteJobs: 'boolean',
      groupId: 'string',
      namespace: 'string',
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

