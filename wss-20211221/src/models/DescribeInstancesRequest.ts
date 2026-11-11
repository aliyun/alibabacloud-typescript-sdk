// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The list of sold instance IDs, which is used to specify the instances for this operation.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The maximum number of records to return per query.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. Leave it empty for the first query. For subsequent queries, pass the NextToken value returned in the previous response as is. Do not construct or decode it yourself.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6k=
   */
  nextToken?: string;
  /**
   * @remarks
   * Specifies whether to query only instances that are not associated with a business resource ID. Valid values:
   * - true: Queries only unassociated instances.
   * - false or empty: Does not filter by this condition.
   */
  noResourceId?: boolean;
  /**
   * @remarks
   * The list of instance property names to be filtered.
   */
  propertyKeyList?: string[];
  /**
   * @remarks
   * The list of associated business resource IDs.
   */
  resourceIds?: string[];
  /**
   * @remarks
   * The resource type. For example, CorePackage indicates a core-hour package. It must be consistent with the resource type of the target instance.
   * 
   * This parameter is required.
   * 
   * @example
   * CreditPackage
   */
  resourceType?: string;
  /**
   * @remarks
   * The list of instance statuses used for filtering. You can use NORMAL, DELETED, PENDING, and EXPIRED. ARCHIVED indicates the historical archived status.
   */
  stateList?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      noResourceId: 'NoResourceId',
      propertyKeyList: 'PropertyKeyList',
      resourceIds: 'ResourceIds',
      resourceType: 'ResourceType',
      stateList: 'StateList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      nextToken: 'string',
      noResourceId: 'boolean',
      propertyKeyList: { 'type': 'array', 'itemType': 'string' },
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      stateList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    if(Array.isArray(this.propertyKeyList)) {
      $dara.Model.validateArray(this.propertyKeyList);
    }
    if(Array.isArray(this.resourceIds)) {
      $dara.Model.validateArray(this.resourceIds);
    }
    if(Array.isArray(this.stateList)) {
      $dara.Model.validateArray(this.stateList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

