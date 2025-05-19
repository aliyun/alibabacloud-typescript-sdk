// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLaboratoryRequest extends $dara.Model {
  /**
   * @example
   * 24
   */
  bucketCount?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
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
  debugCrowdId?: string;
  /**
   * @example
   * 1124512470******,1124512471******,1124512472******
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
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pairec-test1
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * laboratory1
   */
  name?: string;
  /**
   * @remarks
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

