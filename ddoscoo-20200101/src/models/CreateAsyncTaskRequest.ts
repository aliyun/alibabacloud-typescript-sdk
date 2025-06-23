// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAsyncTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs in Resource Management. This parameter is empty by default, which indicates that the instance belongs to the default resource group.
   * 
   * @example
   * default
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The details of the asynchronous export task. The value is a JSON string. The field in the value varies with **TaskType**.
   * 
   * If **TaskType** is set to **1**, **3**, **4**, **5**, or **6**, the following filed is returned:
   * 
   * *   **instanceId**: the ID of the instance. This field is required and must be of the STRING type.
   * 
   * If **TaskType** is set to **2**, the following field is returned:
   * 
   * *   **domain**: the domain name of the website, which must be of the STRING type. If you do not specify this field, the forwarding rules of all websites are exported.
   * 
   * This parameter is required.
   * 
   * @example
   * {"instanceId": "ddoscoo-cn-mp91j1ao****"}
   */
  taskParams?: string;
  /**
   * @remarks
   * The type of the asynchronous export task that you want to create. Valid values:
   * 
   * *   **1**: the task to export the port forwarding rules of an instance
   * *   **2**: the task to export the forwarding rules of a website protected by an instance
   * *   **3**: the task to export the session persistence and health check settings of an instance
   * *   **4**: the task to export the anti-DDoS mitigation policies of an instance
   * *   **5**: the task to download the blacklist for destination IP addresses of an instance
   * *   **6**: the task to download the whitelist for destination IP addresses of an instance
   * 
   * This parameter is required.
   * 
   * @example
   * 5
   */
  taskType?: number;
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
      taskParams: 'TaskParams',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
      taskParams: 'string',
      taskType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

