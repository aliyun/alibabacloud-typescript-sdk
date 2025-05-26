// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReleaseClusterPublicConnectionRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp11q28kvl688****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The database engine of the cluster. Valid values:
   * 
   * *   **AnalyticDB** (default): the AnalyticDB for MySQL engine.
   * *   **Clickhouse**: the wide table engine.
   * 
   * @example
   * Clickhouse
   */
  engine?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      engine: 'Engine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      engine: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

