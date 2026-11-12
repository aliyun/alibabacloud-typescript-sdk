// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteExecutorGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * xxljob-b6ec1xxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * Specifies whether to synchronously delete tasks.
   */
  deleteJobs?: boolean;
  /**
   * @remarks
   * The ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 83163
   */
  id?: number;
  /**
   * @remarks
   * The name of the executor group.
   * 
   * @example
   * group1
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      deleteJobs: 'DeleteJobs',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      deleteJobs: 'boolean',
      id: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

