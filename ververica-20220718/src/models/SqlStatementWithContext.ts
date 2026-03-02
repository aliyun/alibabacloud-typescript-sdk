// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SqlStatementWithContext extends $dara.Model {
  /**
   * @remarks
   * The additional dependencies.
   */
  additionalDependencies?: string[];
  /**
   * @remarks
   * Specifies whether the deployment is a batch deployment.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  batchMode?: boolean;
  /**
   * @remarks
   * The Realtime Compute for Apache Flink configuration.
   */
  flinkConfiguration?: { [key: string]: any };
  /**
   * @remarks
   * The code of the deployment.
   * 
   * This parameter is required.
   * 
   * @example
   * CREATE TEMPORARY TABLE datagen_source (
   *     name VARCHAR,
   *     score BIGINT
   * ) WITH (
   *    \\"connector\\" = \\"datagen\\"
   * );
   * CREATE TEMPORARY TABLE print_table (
   *    name VARCHAR,
   *    score BIGINT
   * ) WITH (
   *   \\"connector\\"=\\"print\\",
   *   \\"logger\\"=\\"true\\"
   * );
   * 
   * INSERT INTO print_table
   * select * from datagen_source;
   */
  statement?: string;
  /**
   * @remarks
   * The engine version.
   * 
   * @example
   * vvr-8.0.6-flink-1.17
   */
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      additionalDependencies: 'additionalDependencies',
      batchMode: 'batchMode',
      flinkConfiguration: 'flinkConfiguration',
      statement: 'statement',
      versionName: 'versionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalDependencies: { 'type': 'array', 'itemType': 'string' },
      batchMode: 'boolean',
      flinkConfiguration: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      statement: 'string',
      versionName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.additionalDependencies)) {
      $dara.Model.validateArray(this.additionalDependencies);
    }
    if(this.flinkConfiguration) {
      $dara.Model.validateMap(this.flinkConfiguration);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

