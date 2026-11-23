// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRouteMapAssociationsResponseBodyRouteMapAssociationList extends $dara.Model {
  /**
   * @remarks
   * The ID of the route map association.
   * 
   * @example
   * ecr-routemap-assoc-qdoeneegffq4yv****
   */
  associationId?: string;
  /**
   * @remarks
   * The direction in which the routing policy is applied. Valid values:
   * 
   * - **Inbound**: the inbound region gateway direction, indicating the direction in which routing is transmitted to the Express Connect Router (ECR).
   * - **Outbound**: the outbound region gateway direction, indicating the direction in which routing is transmitted from the Express Connect Router (ECR).
   * 
   * @example
   * Inbound
   */
  direction?: string;
  /**
   * @remarks
   * The instance ID of the Express Connect Router (ECR).
   * 
   * @example
   * ecr-mezk2idmsd0vx2****
   */
  ecrId?: string;
  /**
   * @remarks
   * The time when the route map association was created.
   * 
   * The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2026-03-16T03:34:09Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the route map association was updated.
   * 
   * The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2026-10-29T03:27:24Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The priority of the route map. A smaller value indicates a higher priority.
   * 
   * @example
   * 6
   */
  priority?: number;
  /**
   * @remarks
   * The list of region IDs where the route map is distributed and takes effect.
   */
  regionIdList?: string[];
  /**
   * @remarks
   * The ID of the route map.
   * 
   * @example
   * rm-6m58b17417tg5a****
   */
  routeMapId?: string;
  /**
   * @remarks
   * The status of the route map association. Valid values:
   * 
   * - **CREATING**: The association is being created.
   * - **ACTIVE**: The association is in a normal state, and no operations are in progress.
   * - **DELETING**: The association is being deleted.
   * - **UPDATING**: The association is being updated.
   * - **DELETED**: The association is deleted.
   * 
   * @example
   * ACTIVE
   */
  status?: string;
  /**
   * @remarks
   * The version number of the route map. The version number increments when the route map in the CEN is changed.
   * 
   * @example
   * 3
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      associationId: 'AssociationId',
      direction: 'Direction',
      ecrId: 'EcrId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      priority: 'Priority',
      regionIdList: 'RegionIdList',
      routeMapId: 'RouteMapId',
      status: 'Status',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associationId: 'string',
      direction: 'string',
      ecrId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      priority: 'number',
      regionIdList: { 'type': 'array', 'itemType': 'string' },
      routeMapId: 'string',
      status: 'string',
      version: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.regionIdList)) {
      $dara.Model.validateArray(this.regionIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRouteMapAssociationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the access denied error.
   * 
   * @example
   * Authentication is failed for ****
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The status code that indicates whether the call is successful. A value of 200 indicates success. Other values indicate failure. For more information about the causes of failure, see error codes.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The dynamic error code.
   * 
   * @example
   * IllegalParamFormat.EcrId
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic error message, which is used to replace `%s` in the **ErrMessage** error message.
   * 
   * > If **ErrMessage** returns **The Value of Input Parameter %s is not valid** and **DynamicMessage** returns **DtsJobId**, the **DtsJobId** request parameter is invalid.
   * 
   * @example
   * The param format of EcrId **** is illegal.
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The maximum number of entries returned.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The message returned for the operation.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The token that is used to start the next query. Valid values:
   * 
   * - If **NextToken** is empty, no next query is to be sent.
   * - If **NextToken** has a return value, the value indicates the token used to start the next query.
   * 
   * @example
   * e0a2dbeb69a8beeeb8194e92b702df3fd3e7bfe6ce7bfc16e0b5e8707e68181f
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 05130E79-588D-5C40-A718-C4863A59****
   */
  requestId?: string;
  /**
   * @remarks
   * The list of route map associations.
   */
  routeMapAssociationList?: ListRouteMapAssociationsResponseBodyRouteMapAssociationList[];
  /**
   * @remarks
   * Indicates whether the call is successful. Valid values:
   * 
   * - **True**: The call is successful.
   * - **False**: The call fails.
   * 
   * @example
   * True
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of route map associations.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      httpStatusCode: 'HttpStatusCode',
      maxResults: 'MaxResults',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      routeMapAssociationList: 'RouteMapAssociationList',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      httpStatusCode: 'number',
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      routeMapAssociationList: { 'type': 'array', 'itemType': ListRouteMapAssociationsResponseBodyRouteMapAssociationList },
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.routeMapAssociationList)) {
      $dara.Model.validateArray(this.routeMapAssociationList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

