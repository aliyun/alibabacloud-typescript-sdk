// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFotaTasksRequest extends $dara.Model {
  /**
   * @remarks
   * > This parameter is not publicly available.
   * 
   * @example
   * windows
   */
  fotaStatus?: string;
  /**
   * @remarks
   * The language type of the upgrade version description.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The number of entries per page for a paged query.
   * 
   * - Maximum value: 100.
   * - Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next query. An empty value indicates that no more results exist.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) to query the regions supported by Elastic Desktop Service.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The list of image upgrade tasks.
   */
  taskUid?: string[];
  /**
   * @remarks
   * Specifies whether the image upgrade task is automatically pushed.
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

