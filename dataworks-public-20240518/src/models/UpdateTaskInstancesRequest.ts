// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTaskInstancesRequestTaskInstancesDataSource extends $dara.Model {
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * mysql_test
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class UpdateTaskInstancesRequestTaskInstances extends $dara.Model {
  /**
   * @remarks
   * The information about the associated data source.
   */
  dataSource?: UpdateTaskInstancesRequestTaskInstancesDataSource;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  id?: number;
  /**
   * @remarks
   * The priority of the instance. Valid values: 1, 3, 5, 7, and 8.
   * 
   * A larger value indicates a higher priority. Default value: 1.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The resource group information. Set this parameter to the ID of a resource group for scheduling.
   * 
   * @example
   * S_res_group_524258031846018_1684XXXXXXXXX
   */
  runtimeResource?: string;
  static names(): { [key: string]: string } {
    return {
      dataSource: 'DataSource',
      id: 'Id',
      priority: 'Priority',
      runtimeResource: 'RuntimeResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSource: UpdateTaskInstancesRequestTaskInstancesDataSource,
      id: 'number',
      priority: 'number',
      runtimeResource: 'string',
    };
  }

  validate() {
    if(this.dataSource && typeof (this.dataSource as any).validate === 'function') {
      (this.dataSource as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTaskInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * this is a comment
   */
  comment?: string;
  /**
   * @remarks
   * The instances.
   */
  taskInstances?: UpdateTaskInstancesRequestTaskInstances[];
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      taskInstances: 'TaskInstances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      taskInstances: { 'type': 'array', 'itemType': UpdateTaskInstancesRequestTaskInstances },
    };
  }

  validate() {
    if(Array.isArray(this.taskInstances)) {
      $dara.Model.validateArray(this.taskInstances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

