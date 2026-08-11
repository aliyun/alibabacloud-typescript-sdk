// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSystemConfigsRequestConfigs extends $dara.Model {
  /**
   * @remarks
   * The system configuration name. Valid values:
   * - callableTime: the outbound job window.
   * - calleeDailyAttemptLimit: the maximum number of daily calls to a single callee number.
   * 
   * @example
   * callableTime
   */
  name?: string;
  /**
   * @remarks
   * The configuration value.
   * 
   * - If Name is set to callableTime, a sample Value is [{"beginTime":"09:00:00","endTime":"12:00:00"},{"beginTime":"14:00:00","endTime":"18:00:00"}].
   * 
   * - If Name is set to calleeDailyAttemptLimit, the Value is an integer from 1 to 50.
   * 
   * @example
   * 5
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSystemConfigsRequest extends $dara.Model {
  /**
   * @remarks
   * The list of configurations.
   */
  configs?: UpdateSystemConfigsRequestConfigs[];
  /**
   * @remarks
   * The configuration type ID. If ObjectType is set to INSTANCE, this parameter specifies the instance ID. If ObjectType is set to TENANT, this parameter specifies the tenant ID.
   * 
   * @example
   * 4f9a8e2b-6c1d-4a7e-9b3f-2d5c8a1e7b04
   */
  objectId?: string;
  /**
   * @remarks
   * The configuration type. Valid values:
   * - INSTANCE: instance level.
   * - TENANT: tenant level.
   * 
   * @example
   * INSTANCE
   */
  objectType?: string;
  static names(): { [key: string]: string } {
    return {
      configs: 'Configs',
      objectId: 'ObjectId',
      objectType: 'ObjectType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configs: { 'type': 'array', 'itemType': UpdateSystemConfigsRequestConfigs },
      objectId: 'string',
      objectType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.configs)) {
      $dara.Model.validateArray(this.configs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

