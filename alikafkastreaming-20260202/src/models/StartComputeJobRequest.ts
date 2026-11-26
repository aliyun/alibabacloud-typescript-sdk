// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartComputeJobRequest extends $dara.Model {
  /**
   * @remarks
   * The CU limit for the job. Integers and decimals are supported.
   * 
   * @example
   * 2.0
   */
  cuLimit?: number;
  /**
   * @remarks
   * The number of reserved CUs for the job. Integers and decimals are supported.
   * 
   * > The number of reserved CUs cannot exceed the CU limit.
   * 
   * @example
   * 2.0
   */
  cuReserved?: number;
  /**
   * @remarks
   * **The Flink SQL draft, which must be a self-contained and complete DDL and DML statement.**
   * 
   * @example
   * CREATE TEMPORARY TABLE src (id BIGINT) WITH (\"connector\" = \"datagen\"); CREATE TEMPORARY TABLE sink (id BIGINT) WITH (\"connector\" = \"print\"); INSERT INTO sink SELECT id FROM src;
   */
  draftSql?: string;
  /**
   * @remarks
   * **The compute instance ID.**
   * 
   * This parameter is required.
   * 
   * @example
   * alikafka_streaming-cn-pe333xxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * **The name of the compute job.**
   * 
   * This parameter is required.
   * 
   * @example
   * order_enrichment
   */
  jobName?: string;
  /**
   * @remarks
   * **The recovery mode, such as savepoint or stateless.**
   * 
   * @example
   * savepoint
   */
  recoveryMode?: string;
  /**
   * @remarks
   * **The region ID.**
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      cuLimit: 'CuLimit',
      cuReserved: 'CuReserved',
      draftSql: 'DraftSql',
      instanceId: 'InstanceId',
      jobName: 'JobName',
      recoveryMode: 'RecoveryMode',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cuLimit: 'number',
      cuReserved: 'number',
      draftSql: 'string',
      instanceId: 'string',
      jobName: 'string',
      recoveryMode: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

