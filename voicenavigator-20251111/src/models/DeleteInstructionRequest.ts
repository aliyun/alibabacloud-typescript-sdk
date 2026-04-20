// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteInstructionRequest extends $dara.Model {
  /**
   * @example
   * Transfer00
   */
  code?: string;
  /**
   * @example
   * 36e9a4cd-a821-4f78-86fa-a9a4aefeea2e
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
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

