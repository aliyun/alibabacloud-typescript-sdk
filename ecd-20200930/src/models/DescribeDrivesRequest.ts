// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDrivesRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the storage resources.
   */
  domainIds?: string[];
  /**
   * @remarks
   * The number of entries per page.
   * 
   * *   Maximum value: 500.
   * *   Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
   * 
   * @example
   * AAAA****
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) operation to query the list of regions where Elastic Desktop Service (EDS) Enterprise is available.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The type of the storage resource.
   * 
   * Valid values:
   * 
   * *   NAS: NAS storage
   * *   PDS: PDS storage
   * 
   * @example
   * NAS
   */
  resourceType?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * user01
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      domainIds: 'DomainIds',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainIds: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      resourceType: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.domainIds)) {
      $dara.Model.validateArray(this.domainIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

