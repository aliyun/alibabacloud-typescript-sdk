// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisableInstanceDasConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The database engine. Set the value to Redis.
   * 
   * This parameter is required.
   * 
   * @example
   * Redis
   */
  engine?: string;
  /**
   * @remarks
   * The database instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * r-bp1nti25tc7bq5****
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of auto scaling. Valid values:
   * 
   * *   **specScale**: The specifications of a database instance are automatically scaled up or down.
   * *   **shardScale**: The number of shards for a database instance is automatically increased or decreased.
   * *   **bandwidthScale**: The bandwidth of a database instance is automatically increased or decreased.
   * 
   * This parameter is required.
   * 
   * @example
   * bandwidthScale
   */
  scaleType?: string;
  static names(): { [key: string]: string } {
    return {
      engine: 'Engine',
      instanceId: 'InstanceId',
      scaleType: 'ScaleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engine: 'string',
      instanceId: 'string',
      scaleType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

