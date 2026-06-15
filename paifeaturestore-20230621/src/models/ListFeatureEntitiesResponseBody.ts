// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFeatureEntitiesResponseBodyFeatureEntities extends $dara.Model {
  /**
   * @remarks
   * The feature entity ID.
   * 
   * @example
   * 3
   */
  featureEntityId?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The join ID that links the feature entity to a feature view.
   * 
   * @example
   * user_id
   */
  joinId?: string;
  /**
   * @remarks
   * The feature entity name.
   * 
   * @example
   * feature_entity_1
   */
  name?: string;
  /**
   * @remarks
   * The owner\\"s Alibaba Cloud account ID.
   * 
   * @example
   * 123456789****
   */
  owner?: string;
  /**
   * @remarks
   * The parent feature entity ID. This value is empty or 0 for a root feature entity.
   * 
   * @example
   * 1
   */
  parentFeatureEntityId?: string;
  /**
   * @remarks
   * The parent feature entity name.
   * 
   * @example
   * user
   */
  parentFeatureEntityName?: string;
  /**
   * @remarks
   * The join ID of the parent feature entity.
   * 
   * @example
   * user_id
   */
  parentJoinId?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 3
   */
  projectId?: string;
  /**
   * @remarks
   * The project name.
   * 
   * @example
   * project_1
   */
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      featureEntityId: 'FeatureEntityId',
      gmtCreateTime: 'GmtCreateTime',
      joinId: 'JoinId',
      name: 'Name',
      owner: 'Owner',
      parentFeatureEntityId: 'ParentFeatureEntityId',
      parentFeatureEntityName: 'ParentFeatureEntityName',
      parentJoinId: 'ParentJoinId',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureEntityId: 'string',
      gmtCreateTime: 'string',
      joinId: 'string',
      name: 'string',
      owner: 'string',
      parentFeatureEntityId: 'string',
      parentFeatureEntityName: 'string',
      parentJoinId: 'string',
      projectId: 'string',
      projectName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFeatureEntitiesResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of feature entities.
   */
  featureEntities?: ListFeatureEntitiesResponseBodyFeatureEntities[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 37D19490-AB69-567D-A852-407C94E510E9
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of feature entities.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      featureEntities: 'FeatureEntities',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureEntities: { 'type': 'array', 'itemType': ListFeatureEntitiesResponseBodyFeatureEntities },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.featureEntities)) {
      $dara.Model.validateArray(this.featureEntities);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

