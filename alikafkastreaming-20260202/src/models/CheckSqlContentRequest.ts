// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckSqlContentRequest extends $dara.Model {
  /**
   * @remarks
   * The compute instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * alikafka_streaming-cn-a1b2c3d4
   */
  instanceId?: string;
  /**
   * @remarks
   * The compute job name.
   * 
   * This parameter is required.
   * 
   * @example
   * order_enrichment
   */
  jobName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The Flink SQL statement to be validated.
   * 
   * This parameter is required.
   * 
   * @example
   * INSERT INTO sink_table SELECT * FROM source_table;
   */
  sqlContent?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      jobName: 'JobName',
      regionId: 'RegionId',
      sqlContent: 'SqlContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      jobName: 'string',
      regionId: 'string',
      sqlContent: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

