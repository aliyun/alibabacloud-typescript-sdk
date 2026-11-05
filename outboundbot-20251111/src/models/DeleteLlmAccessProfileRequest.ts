// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteLlmAccessProfileRequest extends $dara.Model {
  /**
   * @remarks
   * The access configuration ID.
   * 
   * @example
   * 73ce1225-c3cc-43e5-b169-1ef56afaeb9f
   */
  accessProfileId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 174952ab-9825-4cc9-a5e2-de82d7fa4cdd
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

