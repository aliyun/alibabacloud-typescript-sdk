// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourcesForTagOptionResponseBodyResourceDetails extends $dara.Model {
  /**
   * @remarks
   * The time when the resource was created.
   * 
   * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2022-11-04T08:07:04.281986714Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the resource.
   * 
   * The value must be 1 to 128 characters in length.
   * 
   * @example
   * The description of the resource.
   */
  description?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the resource.
   * 
   * @example
   * acs:servicecatalog:cn-hangzhou:146611588617****:product/prod-bp18r7q127****
   */
  resourceArn?: string;
  /**
   * @remarks
   * The ID of the resource with which the tag option is associated.
   * 
   * @example
   * port-bp15p96922****
   */
  resourceId?: string;
  /**
   * @remarks
   * The name of the resource.
   * 
   * @example
   * DEMO-ECS
   */
  resourceName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      resourceArn: 'ResourceArn',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      resourceArn: 'string',
      resourceId: 'string',
      resourceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesForTagOptionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * Valid values: 1 to 100 Minimum value: 1. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E465F21C-8712-5794-A754-5E4D9152****
   */
  requestId?: string;
  /**
   * @remarks
   * An array that consists of the associated resources.
   */
  resourceDetails?: ListResourcesForTagOptionResponseBodyResourceDetails[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      resourceDetails: 'ResourceDetails',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      resourceDetails: { 'type': 'array', 'itemType': ListResourcesForTagOptionResponseBodyResourceDetails },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.resourceDetails)) {
      $dara.Model.validateArray(this.resourceDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

