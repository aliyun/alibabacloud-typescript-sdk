// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateJobScriptRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID. You can obtain the application ID on the Applications page in the SchedulerX console.
   * 
   * This parameter is required.
   * 
   * @example
   * testSchedulerx.defaultGroup
   */
  groupId?: string;
  /**
   * @remarks
   * The job ID. You can obtain the ID on the Tasks page in the SchedulerX console.
   * 
   * This parameter is required.
   * 
   * @example
   * 301
   */
  jobId?: number;
  /**
   * @remarks
   * The namespace ID. You can obtain the namespace ID on the Namespaces page in the SchedulerX console.
   * 
   * This parameter is required.
   * 
   * @example
   * adcfc35d-e2fe-4fe9-bbaa-20e90ffc****
   */
  namespace?: string;
  /**
   * @remarks
   * The source of the namespace. This parameter is required only for a special third party.
   * 
   * @example
   * schedulerx
   */
  namespaceSource?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The script content.
   * 
   * @example
   * #!/bin/bash
   * 
   * # The following are predefined variables provided by the system. You can use them to obtain information about the job run.
   * echo "Job parameters: #{schedulerx.jobParameters}"
   * echo "Shard index: #{schedulerx.shardingId}"
   * echo "Shard parameters: #{schedulerx.shardingParameters}"
   * echo "Total number of shards: #{schedulerx.shardingNum}"
   * echo "Current retry count: #{schedulerx.attempt}"
   * echo "Trigger type: #{schedulerx.triggerType}"
   * echo "Scheduled timestamp: #{schedulerx.scheduleTime}"
   * echo "Data timestamp: #{schedulerx.dataTime}"
   * 
   * # The output of the last line will be returned as the result
   * echo "hello world"
   * 
   * # exit 1 indicates failure
   * exit 0
   */
  scriptContent?: string;
  /**
   * @remarks
   * The description of the script version.
   * 
   * @example
   * Print job running information
   */
  versionDescription?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      jobId: 'JobId',
      namespace: 'Namespace',
      namespaceSource: 'NamespaceSource',
      regionId: 'RegionId',
      scriptContent: 'ScriptContent',
      versionDescription: 'VersionDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      jobId: 'number',
      namespace: 'string',
      namespaceSource: 'string',
      regionId: 'string',
      scriptContent: 'string',
      versionDescription: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

