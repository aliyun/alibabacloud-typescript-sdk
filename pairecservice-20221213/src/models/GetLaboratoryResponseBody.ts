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
   * 
   * @example
   * Filter
   */
  bucketType?: string;
  /**
   * @remarks
   * The assigned buckets.
   * 
   * @example
   * 1,2,3,10-20
   */
  buckets?: string;
  /**
   * @remarks
   * The crowd ID.
   * 
   * @example
   * 3
   */
  crowdId?: string;
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
   * The debug users.
   * 
   * @example
   * user1,user2,user3
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
   * The environment. Valid values:
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
   * The laboratory name.
   * 
   * @example
   * laboratory1
   */
  name?: string;
  /**
   * @remarks
   * The request ID.
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
   * The status of the laboratory. Valid values:
   * 
   * @example
   * Offline
   */
  status?: string;
  /**
   * @remarks
   * The laboratory type. Valid values:
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

