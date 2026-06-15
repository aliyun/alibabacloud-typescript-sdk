// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFeatureEntityResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the feature entity was created.
   * 
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The join ID used to associate with a feature view.
   * 
   * @example
   * user_id
   */
  joinId?: string;
  /**
   * @remarks
   * The name of the feature entity.
   * 
   * @example
   * feature_entity_1
   */
  name?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the creator.
   * 
   * @example
   * 123456789*****
   */
  owner?: string;
  /**
   * @remarks
   * The ID of the parent feature entity. An empty value or 0 indicates a root feature entity.
   * 
   * @example
   * 1
   */
  parentFeatureEntityId?: string;
  /**
   * @remarks
   * The name of the parent feature entity.
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
   * The name of the project.
   * 
   * @example
   * project_1
   */
  projectName?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E23EFF09-58AA-5420-934F-8453AE01548D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreateTime: 'GmtCreateTime',
      joinId: 'JoinId',
      name: 'Name',
      owner: 'Owner',
      parentFeatureEntityId: 'ParentFeatureEntityId',
      parentFeatureEntityName: 'ParentFeatureEntityName',
      parentJoinId: 'ParentJoinId',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreateTime: 'string',
      joinId: 'string',
      name: 'string',
      owner: 'string',
      parentFeatureEntityId: 'string',
      parentFeatureEntityName: 'string',
      parentJoinId: 'string',
      projectId: 'string',
      projectName: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

