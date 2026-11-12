// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSupabaseBackupJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The backup mode. Valid values:
   * 
   * - Automated: automatic backup.
   * - Manual: manual backup.
   * 
   * If you do not specify this parameter, all backup tasks are returned.
   * 
   * @example
   * Automated
   */
  backupMode?: string;
  /**
   * @remarks
   * The maximum number of entries to return for this request.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The paging token for a paged query. Do not specify this parameter for the first request. For subsequent requests, specify the NextToken value returned in the previous response.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
   * @remarks
   * Instance ID of the Supabase instance. You can obtain instance ID on the Supabase page in the console.
   * 
   * This parameter is required.
   * 
   * @example
   * sbp-263****
   */
  projectId?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/86912.html) operation to query available region IDs.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      backupMode: 'BackupMode',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      projectId: 'ProjectId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupMode: 'string',
      maxResults: 'number',
      nextToken: 'string',
      projectId: 'string',
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

