// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLaboratoryResponseBody extends $dara.Model {
  /**
   * @example
   * 100
   */
  bucketCount?: number;
  /**
   * @example
   * Filter
   */
  bucketType?: string;
  /**
   * @example
   * 1,2,3,10-20
   */
  buckets?: string;
  /**
   * @example
   * 3
   */
  crowdId?: string;
  /**
   * @example
   * 3
   */
  debugCrowdId?: string;
  /**
   * @example
   * user1,user2,user3
   */
  debugUsers?: string;
  /**
   * @example
   * This is a test.
   */
  description?: string;
  /**
   * @example
   * Daily
   */
  environment?: string;
  /**
   * @example
   * filter=xxx
   */
  filter?: string;
  /**
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
   * @example
   * 3
   */
  sceneId?: string;
  /**
   * @example
   * Offline
   */
  status?: string;
  /**
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

