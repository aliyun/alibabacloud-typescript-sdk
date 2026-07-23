// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLaboratoryRequest extends $dara.Model {
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
   * The bucketing method. Valid values: ● Uid: Bucketing by UID (default). ● UidHash: Bucketing by UID hash. ● Filter: Bucketing by a filter condition.
   * 
   * This parameter is required.
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
   * The debug crowd ID.
   * 
   * @example
   * 3
   */
  debugCrowdId?: string;
  /**
   * @remarks
   * The UIDs of debugging users. These UIDs must belong to an Alibaba Cloud main account or a sub-account. Separate multiple UIDs with a comma (,).
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
   * The environment. Valid values: ● Daily: The daily environment. ● Pre: The staging environment. ● Prod: The production environment.
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
   * The instance ID. Call the ListInstances operation to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pairec-test1
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
   * The laboratory type. Valid values: ● Base ● NonBase
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

