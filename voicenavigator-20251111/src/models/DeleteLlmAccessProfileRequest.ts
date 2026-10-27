// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteLlmAccessProfileRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the third-party model configuration.
   * 
   * @example
   * af81a389-91f0-4157-8d82-720edd02b66b
   */
  accessProfileId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * af81a389-91f0-4157-8d82-720edd02b66a
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessProfileId: 'AccessProfileId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessProfileId: 'string',
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

