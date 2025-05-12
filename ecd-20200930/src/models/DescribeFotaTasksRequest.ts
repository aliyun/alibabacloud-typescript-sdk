// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFotaTasksRequest extends $dara.Model {
  /**
   * @remarks
   * >  This parameter is not publicly available.
   * 
   * @example
   * To be hidden.
   */
  fotaStatus?: string;
  /**
   * @remarks
   * The language of the image version to update.
   * 
   * Valid values:
   * 
   * *   en: English.
   * *   zh: Simplified Chinese.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * *   Valid values: 1 to 100
   * *   Default value: 20
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. If the NextToken parameter is empty, no next page exists.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) operation to query the regions supported by Elastic Desktop Service.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The IDs of the image update tasks.
   */
  taskUid?: string[];
  /**
   * @remarks
   * Specifies whether to automatically push the image update task.
   * 
   * Valid values:
   * 
   * *   Running: automatically pushes the image update task.
   * *   Pending: does not automatically push the image update task.
   * 
   * @example
   * Pending
   */
  userStatus?: string;
  static names(): { [key: string]: string } {
    return {
      fotaStatus: 'FotaStatus',
      lang: 'Lang',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      taskUid: 'TaskUid',
      userStatus: 'UserStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fotaStatus: 'string',
      lang: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      taskUid: { 'type': 'array', 'itemType': 'string' },
      userStatus: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.taskUid)) {
      $dara.Model.validateArray(this.taskUid);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

