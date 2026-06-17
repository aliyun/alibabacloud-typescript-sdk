// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryConsumerAuthorizationRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The API name.
   * 
   * @example
   * api-xx
   */
  apiNameLike?: string;
  /**
   * @remarks
   * The consumer ID.
   * 
   * @example
   * cs-ct21c16m1hkp64hk6qmg
   */
  consumerId?: string;
  /**
   * @remarks
   * The consumer name.
   * 
   * @example
   * consumer-xxx
   */
  consumerNameLike?: string;
  /**
   * @remarks
   * The environment ID.
   * 
   * @example
   * env-cpqnr6tlhtgubc***
   */
  environmentId?: string;
  /**
   * @remarks
   * Specifies whether to group results by API.
   * 
   * @example
   * true
   */
  groupByApi?: boolean;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The parent resource ID.
   * 
   * @example
   * ha-cn-li942gy8p01
   */
  parentResourceId?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * ha-cn-li942gy8p03
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * HttpApiRoute
   */
  resourceType?: string;
  /**
   * @remarks
   * The service source type.
   * 
   * @example
   * K8S
   */
  resourceTypes?: string;
  static names(): { [key: string]: string } {
    return {
      apiNameLike: 'apiNameLike',
      consumerId: 'consumerId',
      consumerNameLike: 'consumerNameLike',
      environmentId: 'environmentId',
      groupByApi: 'groupByApi',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      parentResourceId: 'parentResourceId',
      resourceId: 'resourceId',
      resourceType: 'resourceType',
      resourceTypes: 'resourceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiNameLike: 'string',
      consumerId: 'string',
      consumerNameLike: 'string',
      environmentId: 'string',
      groupByApi: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      parentResourceId: 'string',
      resourceId: 'string',
      resourceType: 'string',
      resourceTypes: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

