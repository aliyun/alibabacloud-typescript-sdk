// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AllocateClusterPublicConnectionRequest extends $dara.Model {
  /**
   * @remarks
   * The prefix of the public endpoint.
   * 
   * *   The prefix can contain lowercase letters, digits, and hyphens (-). It must start with a lowercase letter.
   * *   The prefix can be up to 30 characters in length.
   * 
   * @example
   * test12
   */
  connectionStringPrefix?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp1z5d2q71is2****
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
      connectionStringPrefix: 'ConnectionStringPrefix',
      DBClusterId: 'DBClusterId',
      engine: 'Engine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionStringPrefix: 'string',
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

