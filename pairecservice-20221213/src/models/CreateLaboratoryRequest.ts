// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLaboratoryRequest extends $dara.Model {
  /**
   * @remarks
   * The number of buckets.
   * 
   * @example
   * 24
   */
  bucketCount?: number;
  /**
   * @remarks
   * The bucketing method. Valid values: ● `UidHash`: by UID hash (default) ● `Uid`: by UID ● `Filter`: filter-based
   * 
   * This parameter is required.
   * 
   * @example
   * UidHash
   */
  bucketType?: string;
  /**
   * @remarks
   * The assigned bucket numbers.
   * 
   * @example
   * 1,2,3,10-20
   */
  buckets?: string;
  /**
   * @remarks
   * The debug crowd ID.
   * 
   * @example
   * 3
   */
  debugCrowdId?: string;
  /**
   * @remarks
   * The UIDs of debug users, separated by commas. Each UID must belong to an Alibaba Cloud primary account or a RAM user.
   * 
   * @example
   * 1124512470******,1124512471******,1124512472******
   */
  debugUsers?: string;
  /**
   * @remarks
   * The laboratory description.
   * 
   * @example
   * This is a test.
   */
  description?: string;
  /**
   * @remarks
   * The environment. Valid values: ● `Daily`: daily ● `Pre`: staging ● `Prod`: production
   * 
   * This parameter is required.
   * 
   * @example
   * Daily
   */
  environment?: string;
  /**
   * @remarks
   * The filter.
   * 
   * @example
   * filter=xxx
   */
  filter?: string;
  /**
   * @remarks
   * The instance ID. To get it, call the `ListInstances` operation.
   * 
   * This parameter is required.
   * 
   * @example
   * pairec-cn-abcdefg1234
   */
  instanceId?: string;
  /**
   * @remarks
   * The laboratory name.
   * 
   * This parameter is required.
   * 
   * @example
   * laboratory1
   */
  name?: string;
  /**
   * @remarks
   * The scene ID. To get it, call the `ListScenes` operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  sceneId?: string;
  /**
   * @remarks
   * The laboratory type. Valid values: `Base` and `NonBase`.
   * 
   * This parameter is required.
   * 
   * @example
   * Base
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bucketCount: 'BucketCount',
      bucketType: 'BucketType',
      buckets: 'Buckets',
      debugCrowdId: 'DebugCrowdId',
      debugUsers: 'DebugUsers',
      description: 'Description',
      environment: 'Environment',
      filter: 'Filter',
      instanceId: 'InstanceId',
      name: 'Name',
      sceneId: 'SceneId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketCount: 'number',
      bucketType: 'string',
      buckets: 'string',
      debugCrowdId: 'string',
      debugUsers: 'string',
      description: 'string',
      environment: 'string',
      filter: 'string',
      instanceId: 'string',
      name: 'string',
      sceneId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

