// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateApiKeyQuotaShrinkRequest extends $dara.Model {
  /**
   * @example
   * rds_copilot***_public_cn-*********6
   */
  instanceId?: string;
  keysShrink?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      keysShrink: 'Keys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      keysShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

