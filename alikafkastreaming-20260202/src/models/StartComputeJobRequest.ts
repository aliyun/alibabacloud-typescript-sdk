// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartComputeJobRequest extends $dara.Model {
  /**
   * @example
   * 2.0
   */
  cuLimit?: number;
  /**
   * @example
   * 1.0
   */
  cuReserved?: number;
  /**
   * @example
   * CREATE TEMPORARY TABLE src (id BIGINT) WITH (\\"connector\\" = \\"datagen\\"); CREATE TEMPORARY TABLE sink (id BIGINT) WITH (\\"connector\\" = \\"print\\"); INSERT INTO sink SELECT id FROM src;
   */
  draftSql?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * alikafka_streaming-cn-pe333xxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * order_enrichment
   */
  jobName?: string;
  /**
   * @example
   * savepoint
   */
  recoveryMode?: string;
  /**
   * @remarks
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

