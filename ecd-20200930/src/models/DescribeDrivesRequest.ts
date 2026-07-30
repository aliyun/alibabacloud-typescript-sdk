// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDrivesRequest extends $dara.Model {
  /**
   * @remarks
   * The list of storage resource IDs.
   */
  domainIds?: string[];
  /**
   * @remarks
   * The number of entries per page for a paged query.
   * 
   * - Maximum value: 500.
   * - Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next query. An empty value indicates that there are no more results.
   * 
   * @example
   * AAAA****
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) to query the regions supported by Elastic Desktop Service.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The storage resource type.
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

