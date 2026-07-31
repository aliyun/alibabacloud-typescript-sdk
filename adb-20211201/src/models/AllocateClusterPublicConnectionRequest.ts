// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AllocateClusterPublicConnectionRequest extends $dara.Model {
  /**
   * @remarks
   * The prefix of the public connection address.
   * 
   * - It must begin with a lowercase letter and can contain only lowercase letters, digits, and hyphens (-).
   * 
   * - It must be no more than 30 characters long.
   * 
   * @example
   * test12
   */
  connectionStringPrefix?: string;
  /**
   * @remarks
   * <props="china">The cluster ID of an Enterprise Edition, Basic Edition, or Data Lakehouse Edition cluster.
   * <props="intl">The cluster ID of a Data Lakehouse Edition cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp1z5d2q71is2****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The database engine. Valid values:
   * 
   * - **AnalyticDB** (default): the AnalyticDB for MySQL engine.
   * 
   * - **Clickhouse**: the wide table engine.
   * 
   * @example
   * Clickhouse
   */
  engine?: string;
  resourceGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      connectionStringPrefix: 'ConnectionStringPrefix',
      DBClusterId: 'DBClusterId',
      engine: 'Engine',
      resourceGroupName: 'ResourceGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionStringPrefix: 'string',
      DBClusterId: 'string',
      engine: 'string',
      resourceGroupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

