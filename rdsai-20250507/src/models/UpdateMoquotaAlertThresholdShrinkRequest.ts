// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMOQuotaAlertThresholdShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * A list of API keys.
   * 
   * This parameter is required.
   */
  apikeyShrink?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rds_copilot***_public_cn-*********6
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      apikeyShrink: 'Apikey',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apikeyShrink: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

