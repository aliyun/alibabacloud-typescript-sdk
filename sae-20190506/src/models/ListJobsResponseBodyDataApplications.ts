// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListJobsResponseBodyDataApplicationsTags } from "./ListJobsResponseBodyDataApplicationsTags";


export class ListJobsResponseBodyDataApplications extends $dara.Model {
  /**
   * @remarks
   * The number of running instances.
   * 
   * @example
   * 0
   */
  active?: number;
  /**
   * @remarks
   * The description of the job template.
   * 
   * @example
   * description
   */
  appDescription?: string;
  /**
   * @remarks
   * The ID of the job template.
   * 
   * @example
   * f7730764-d88f-4b9a-8d8e-cd8efbfe****
   */
  appId?: string;
  /**
   * @remarks
   * The name of the job template.
   * 
   * @example
   * demo-app
   */
  appName?: string;
  /**
   * @remarks
   * The time when the job was last completed.
   * 
   * @example
   * 1657522839
   */
  completionTime?: number;
  /**
   * @remarks
   * The CPU specifications that are required for each instance. Unit: millicores. This parameter cannot be set to 0. Valid values:
   * 
   * *   **500**
   * *   **1000**
   * *   **2000**
   * *   **4000**
   * *   **8000**
   * *   **16000**
   * *   **32000**
   * 
   * @example
   * 500
   */
  cpu?: number;
  /**
   * @remarks
   * The number of instances that failed to run.
   * 
   * @example
   * 0
   */
  failed?: number;
  /**
   * @remarks
   * Indicates whether the latest change order was executed. Valid values:
   * 
   * *   **0**: The latest change order failed to be executed.
   * *   **1**: The latest change order was executed.
   * 
   * @example
   * 1
   */
  lastChangeorderState?: string;
  /**
   * @remarks
   * The status of the latest job. Valid values:
   * 
   * *   **0**: The job is not executed.
   * *   **1**: The job was executed.
   * *   **2**: The job failed to be executed.
   * *   **3**: The job is being executed.
   * 
   * @example
   * 0
   */
  lastJobState?: string;
  /**
   * @remarks
   * The time when the job was last started.
   * 
   * @example
   * 1657522800
   */
  lastStartTime?: number;
  /**
   * @remarks
   * The size of memory that is required by each instance. Unit: MB. This parameter cannot be set to 0. The values of this parameter correspond to the values of the Cpu parameter:
   * 
   * *   This parameter is set to **1024** if the Cpu parameter is set to 500 or 1000.
   * *   This parameter is set to **2048** if the Cpu parameter is set to 500, 1000, or 2000.
   * *   This parameter is set to **4096** if the Cpu parameter is set to 1000, 2000, or 4000.
   * *   This parameter is set to **8192** if the Cpu parameter is set to 2000, 4000, or 8000.
   * *   This parameter is set to **12288** if the Cpu parameter is set to 12000.
   * *   This parameter is set to **16384** if the Cpu parameter is set to 4000, 8000, or 16000.
   * *   This parameter is set to **24576** if the Cpu parameter is set to 12000.
   * *   This parameter is set to **32768** if the Cpu parameter is set to 16000.
   * *   This parameter is set to **65536** if the Cpu parameter is set to 8000, 16000, or 32000.
   * *   This parameter is set to **131072** if the Cpu parameter is set to 32000.
   * 
   * @example
   * 1024
   */
  mem?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the namespace.
   * 
   * @example
   * cn-beijing:demo
   */
  namespaceId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The number of instances that were successfully run.
   * 
   * @example
   * 3
   */
  succeeded?: number;
  /**
   * @remarks
   * Indicates whether the job template is suspended.
   * 
   * @example
   * false
   */
  suspend?: boolean;
  /**
   * @remarks
   * The tags of the job template.
   */
  tags?: ListJobsResponseBodyDataApplicationsTags[];
  triggerConfig?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      appDescription: 'AppDescription',
      appId: 'AppId',
      appName: 'AppName',
      completionTime: 'CompletionTime',
      cpu: 'Cpu',
      failed: 'Failed',
      lastChangeorderState: 'LastChangeorderState',
      lastJobState: 'LastJobState',
      lastStartTime: 'LastStartTime',
      mem: 'Mem',
      message: 'Message',
      namespaceId: 'NamespaceId',
      regionId: 'RegionId',
      succeeded: 'Succeeded',
      suspend: 'Suspend',
      tags: 'Tags',
      triggerConfig: 'TriggerConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'number',
      appDescription: 'string',
      appId: 'string',
      appName: 'string',
      completionTime: 'number',
      cpu: 'number',
      failed: 'number',
      lastChangeorderState: 'string',
      lastJobState: 'string',
      lastStartTime: 'number',
      mem: 'number',
      message: 'string',
      namespaceId: 'string',
      regionId: 'string',
      succeeded: 'number',
      suspend: 'boolean',
      tags: { 'type': 'array', 'itemType': ListJobsResponseBodyDataApplicationsTags },
      triggerConfig: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

