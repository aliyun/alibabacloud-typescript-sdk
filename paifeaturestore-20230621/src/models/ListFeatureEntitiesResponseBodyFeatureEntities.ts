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

