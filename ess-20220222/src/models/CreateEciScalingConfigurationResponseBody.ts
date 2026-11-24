// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEciScalingConfigurationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID, which uniquely identifies the request.
   * 
   * @example
   * 89945DD3-9072-47D0-A318-353284CF****
   */
  requestId?: string;
  /**
   * @remarks
   * The instance ID, which is the container group ID.
   * 
   * @example
   * eci-uf6fonnghi50u374****
   */
  scalingConfigurationId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      scalingConfigurationId: 'ScalingConfigurationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      scalingConfigurationId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

