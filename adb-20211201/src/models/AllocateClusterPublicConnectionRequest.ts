// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AllocateClusterPublicConnectionRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies the prefix of the public endpoint. The prefix must meet the following requirements:
   * - It must start with a lowercase letter and can contain lowercase letters, digits, and hyphens (-).
   * - It can be up to 30 characters in length.
   * 
   * @example
   * test12
   */
  connectionStringPrefix?: string;
  /**
   * @remarks
   * <props="china">The ID of the Enterprise Edition, Basic Edition, or Data Lakehouse Edition cluster.
   * <props="intl">The ID of the Data Lakehouse Edition cluster.
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
   * - **AnalyticDB** (default): AnalyticDB for MySQL engine.
   * - **Clickhouse**: wide table engine.
   * 
   * @example
   * Clickhouse
   */
  engine?: string;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * @example
   * test_group
   */
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

