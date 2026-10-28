// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLaboratoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of buckets.
   * 
   * @example
   * 100
   */
  bucketCount?: number;
  /**
   * @remarks
   * The bucketing method. Valid values:
   * - Uid: UID bucketing (default).
   * - UidHash: UID hashing.
   * - Filter: Filter condition bucketing.
   * 
   * @example
   * Filter
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
   * The ID of the crowd.
   * 
   * @example
   * 3
   */
  crowdId?: string;
  /**
   * @remarks
   * The ID of the debug crowd.
   * 
   * @example
   * 3
   */
  debugCrowdId?: string;
  /**
   * @remarks
   * The debug users.
   * 
   * @example
   * user1,user2,user3
   */
  debugUsers?: string;
  /**
   * @remarks
   * The description of the laboratory.
   * 
   * @example
   * This is a test.
   */
  description?: string;
  /**
   * @remarks
   * The runtime environment. Valid values:
   * - Daily: Daily environment.
   * - Pre: Staging environment.
   * - Prod: Production environment.
   * 
   * @example
   * Daily
   */
  environment?: string;
  /**
   * @remarks
   * The filter condition.
   * 
   * @example
   * filter=xxx
   */
  filter?: string;
  /**
   * @remarks
   * The name of the laboratory.
   * 
   * @example
   * laboratory1
   */
  name?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 1C0898E5-9220-5443-B2D9-445FF0688215
   */
  requestId?: string;
  /**
   * @remarks
   * The scene ID.
   * 
   * @example
   * 3
   */
  sceneId?: string;
  /**
   * @remarks
   * The status. Valid values:
   * - Offline: Not online.
   * - Online: Online.
   * 
   * @example
   * Offline
   */
  status?: string;
  /**
   * @remarks
   * The type of the laboratory. Valid values:
   * - Base
   * - NonBase
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
      crowdId: 'CrowdId',
      debugCrowdId: 'DebugCrowdId',
      debugUsers: 'DebugUsers',
      description: 'Description',
      environment: 'Environment',
      filter: 'Filter',
      name: 'Name',
      requestId: 'RequestId',
      sceneId: 'SceneId',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketCount: 'number',
      bucketType: 'string',
      buckets: 'string',
      crowdId: 'string',
      debugCrowdId: 'string',
      debugUsers: 'string',
      description: 'string',
      environment: 'string',
      filter: 'string',
      name: 'string',
      requestId: 'string',
      sceneId: 'string',
      status: 'string',
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

