// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyForwardSqlLogConfigRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the feature. Valid values:
   * 
   * - **true**: Enable.
   * - **false**: Disable.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The database instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-2ze1jdv45i7l6****
   */
  instanceId?: string;
  /**
   * @remarks
   * The service type. Valid values:
   * DAS_OPS: enables TOP KEY delivery.
   * 
   * This parameter is required.
   * 
   * @example
   * DAS_OPS
   */
  service?: string;
  /**
   * @remarks
   * The task source. Valid values:
   * - TOP_KEY: enables TOP KEY delivery.
   * 
   * This parameter is required.
   * 
   * @example
   * TOP_KEY
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
      instanceId: 'InstanceId',
      service: 'Service',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      instanceId: 'string',
      service: 'string',
      source: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

