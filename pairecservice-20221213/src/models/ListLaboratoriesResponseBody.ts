// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLaboratoriesResponseBodyLaboratories extends $dara.Model {
  /**
   * @remarks
   * The bucket count.
   * 
   * @example
   * 100
   */
  bucketCount?: number;
  /**
   * @remarks
   * The bucketing method.
   * 
   * - `Uid-UID`: Bucketing by UID (default)
   * 
   * - `UidHash`: Bucketing by UID hash
   * 
   * - `Filter`: Bucketing by a filter condition
   * 
   * @example
   * Filter
   */
  bucketType?: string;
  /**
   * @remarks
   * The assigned buckets, specified as numbers or ranges separated by commas.
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
   * The debug users, separated by commas.
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
   * The laboratory environment.
   * 
   * - `Daily`: the daily environment
   * 
   * - `Pre`: the pre-production environment
   * 
   * - `Prod`: the production environment
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
   * The laboratory ID.
   * 
   * @example
   * 3
   */
  laboratoryId?: string;
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
   * The scene ID.
   * 
   * @example
   * 3
   */
  sceneId?: string;
  /**
   * @remarks
   * The laboratory status.
   * 
   * - `Offline`: The laboratory is offline.
   * 
   * - `Online`: The laboratory is online.
   * 
   * @example
   * Offline
   */
  status?: string;
  /**
   * @remarks
   * The laboratory type.
   * 
   * - `Base`: A base laboratory.
   * 
   * - `NonBase`: A non-base laboratory.
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
      laboratoryId: 'LaboratoryId',
      name: 'Name',
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
      laboratoryId: 'string',
      name: 'string',
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

export class ListLaboratoriesResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of laboratories.
   */
  laboratories?: ListLaboratoriesResponseBodyLaboratories[];
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
   * The total number of laboratories.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      laboratories: 'Laboratories',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      laboratories: { 'type': 'array', 'itemType': ListLaboratoriesResponseBodyLaboratories },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.laboratories)) {
      $dara.Model.validateArray(this.laboratories);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

