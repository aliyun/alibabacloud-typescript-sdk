// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetHBaseQuotasRequest extends $dara.Model {
  dimension?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  limit?: string;
  regionId?: string;
  scope?: string;
  securityToken?: string;
  timeUnit?: string;
  type?: string;
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      dimension: 'Dimension',
      instanceId: 'InstanceId',
      limit: 'Limit',
      regionId: 'RegionId',
      scope: 'Scope',
      securityToken: 'SecurityToken',
      timeUnit: 'TimeUnit',
      type: 'Type',
      unit: 'Unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimension: 'string',
      instanceId: 'string',
      limit: 'string',
      regionId: 'string',
      scope: 'string',
      securityToken: 'string',
      timeUnit: 'string',
      type: 'string',
      unit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

