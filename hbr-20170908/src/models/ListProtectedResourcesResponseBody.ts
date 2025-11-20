// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProtectedResourcesResponseBodyProtectedResources extends $dara.Model {
  /**
   * @example
   * BASIC
   */
  createdByProduct?: string;
  /**
   * @example
   * 107374182400
   */
  protectedDataSize?: number;
  /**
   * @example
   * pr-0004************gs61
   */
  protectedResourceId?: string;
  /**
   * @example
   * i-wz95************7zrd
   */
  resourceId?: string;
  /**
   * @example
   * 1024********0703
   */
  resourceOwnerId?: number;
  /**
   * @example
   * 30
   */
  snapshotCount?: number;
  /**
   * @example
   * ECS_FILE
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      createdByProduct: 'CreatedByProduct',
      protectedDataSize: 'ProtectedDataSize',
      protectedResourceId: 'ProtectedResourceId',
      resourceId: 'ResourceId',
      resourceOwnerId: 'ResourceOwnerId',
      snapshotCount: 'SnapshotCount',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdByProduct: 'string',
      protectedDataSize: 'number',
      protectedResourceId: 'string',
      resourceId: 'string',
      resourceOwnerId: 'number',
      snapshotCount: 'number',
      sourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProtectedResourcesResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * eyJJ************MX0=
   */
  nextToken?: string;
  protectedResources?: ListProtectedResourcesResponseBodyProtectedResources[];
  /**
   * @example
   * EB09****-****-****-****-********6C38
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 3
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      maxResults: 'MaxResults',
      message: 'Message',
      nextToken: 'NextToken',
      protectedResources: 'ProtectedResources',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      protectedResources: { 'type': 'array', 'itemType': ListProtectedResourcesResponseBodyProtectedResources },
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.protectedResources)) {
      $dara.Model.validateArray(this.protectedResources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

