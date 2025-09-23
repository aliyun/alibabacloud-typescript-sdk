// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSharedTargetsResponseBodySharedTargets extends $dara.Model {
  /**
   * @remarks
   * The time when the principal was associated with the resource share.
   * 
   * @example
   * 2020-12-07T09:16:59.905Z
   */
  createTime?: string;
  /**
   * @remarks
   * Indicates whether the principal is outside the resource directory. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  external?: boolean;
  /**
   * @remarks
   * The ID of the resource share.
   * 
   * @example
   * rs-6GRmdD3X****
   */
  resourceShareId?: string;
  /**
   * @remarks
   * The ID of the principal or resource owner.
   * 
   * *   If the value of `ResourceOwner` is `Self`, the value of this parameter is the ID of a principal.
   * *   If the value of `ResourceOwner` is `OtherAccounts`, the value of this parameter is the ID of a resource owner.
   * 
   * @example
   * 114240524784****
   */
  targetId?: string;
  /**
   * @remarks
   * The properties of the principal, such as the time range within which the resource is shared.
   * 
   * >  This parameter is returned only if the principal is an Alibaba Cloud service.
   * 
   * @example
   * {
   *     "timeRange":{
   *         "timeRangeType":"timeRange",
   *         "beginAtTime":"00:00",
   *         "timezone":"UTC+8",
   *         "endAtTime":"19:59"
   *     }
   * }
   */
  targetProperty?: string;
  /**
   * @remarks
   * The time when the association of the principal was updated.
   * 
   * @example
   * 2020-12-07T09:16:59.905Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      external: 'External',
      resourceShareId: 'ResourceShareId',
      targetId: 'TargetId',
      targetProperty: 'TargetProperty',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      external: 'boolean',
      resourceShareId: 'string',
      targetId: 'string',
      targetProperty: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSharedTargetsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of `NextToken`.
   * 
   * @example
   * TGlzdFJlc291cm****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04677DCA-7C33-464B-8811-1B1DA3C3D197
   */
  requestId?: string;
  /**
   * @remarks
   * The information of the principals.
   */
  sharedTargets?: ListSharedTargetsResponseBodySharedTargets[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      sharedTargets: 'SharedTargets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      sharedTargets: { 'type': 'array', 'itemType': ListSharedTargetsResponseBodySharedTargets },
    };
  }

  validate() {
    if(Array.isArray(this.sharedTargets)) {
      $dara.Model.validateArray(this.sharedTargets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

