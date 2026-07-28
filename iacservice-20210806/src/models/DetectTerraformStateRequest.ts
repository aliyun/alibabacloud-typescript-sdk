// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetectTerraformStateRequest extends $dara.Model {
  /**
   * @remarks
   * The idempotence token. Format: [0-9a-zA-Z-]{1,64}. Use a UUID.
   * 
   * This parameter is required.
   * 
   * @example
   * a65451293e64979ba7a4b573950217fe
   */
  clientToken?: string;
  /**
   * @remarks
   * The task identifier. For a Stack task, the format is <$stackId>:<$deploymentName>. For a Task task, the format is <$TaskId>.
   * 
   * This parameter is required.
   * 
   * @example
   * stack-as11xxxxxxxxx:developmentA
   */
  identifier?: string;
  /**
   * @remarks
   * The task type. Valid values:
   * - Stack
   * - Task.
   * 
   * This parameter is required.
   * 
   * @example
   * Stack
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      identifier: 'identifier',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      identifier: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

