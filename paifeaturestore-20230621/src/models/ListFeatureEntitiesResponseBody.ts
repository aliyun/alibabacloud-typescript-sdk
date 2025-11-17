// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFeatureEntitiesResponseBodyFeatureEntities extends $dara.Model {
  /**
   * @example
   * 3
   */
  featureEntityId?: string;
  /**
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtCreateTime?: string;
  /**
   * @example
   * user_id
   */
  joinId?: string;
  /**
   * @example
   * feature_entity_1
   */
  name?: string;
  /**
   * @example
   * 123456789****
   */
  owner?: string;
  /**
   * @example
   * 1
   */
  parentFeatureEntityId?: string;
  /**
   * @example
   * user
   */
  parentFeatureEntityName?: string;
  /**
   * @example
   * user_id
   */
  parentJoinId?: string;
  /**
   * @example
   * 3
   */
  projectId?: string;
  /**
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
  featureEntities?: ListFeatureEntitiesResponseBodyFeatureEntities[];
  /**
   * @example
   * 37D19490-AB69-567D-A852-407C94E510E9
   */
  requestId?: string;
  /**
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

