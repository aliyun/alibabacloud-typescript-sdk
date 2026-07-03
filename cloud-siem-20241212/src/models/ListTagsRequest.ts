// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagsRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * - **zh** (default): Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The maximum number of results to return when using NextToken-based pagination. Valid values: 1 to 100. Default value: 50.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next query. Leave this parameter empty for the first query or if no more results exist. If a next query is available, set this parameter to the NextToken value returned by the previous API call.
   * 
   * @example
   * AAAAASLVeIxed4466E0LVmGkzwS6hJKd9DGVGMDRM6Lu****
   */
  nextToken?: string;
  /**
   * @remarks
   * The region where the threat analysis data management center is located. Specify the management center based on the region of your assets. Valid values:
   * - cn-hangzhou: the asset is in the Chinese mainland.
   * - ap-southeast-1: the asset is outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID that the administrator switches to when viewing as another member.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The view type. Valid values:
   * - 0: the view of the current Alibaba Cloud account.
   * - 1: the view of all accounts in the enterprise.
   * 
   * @example
   * 1
   */
  roleType?: number;
  /**
   * @remarks
   * The target relationship.
   * 
   * @example
   * {"incident_uuid":"3fce2d3b65fc2bd05cac6d******"}
   */
  targetRelation?: string;
  /**
   * @remarks
   * The scan object type. Valid values:
   * 
   * - **1**: snapshot 
   * - **2**: image
   * 
   * @example
   * AliUId
   */
  targetType?: string;
  /**
   * @remarks
   * The UUID of the target asset.
   * 
   * @example
   * a1b2c3-****
   */
  targetUuid?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
      targetRelation: 'TargetRelation',
      targetType: 'TargetType',
      targetUuid: 'TargetUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
      targetRelation: 'string',
      targetType: 'string',
      targetUuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

