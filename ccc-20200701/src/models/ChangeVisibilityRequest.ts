// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeVisibilityRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Cloud Connect Center instance.
   * 
   * This parameter is required.
   * 
   * @example
   * szpczf
   */
  instanceId?: string;
  /**
   * @remarks
   * Specifies whether to set the agent\\"s status to invisible.
   * 
   * @example
   * true
   */
  invisible?: boolean;
  /**
   * @remarks
   * The ID of the agent.
   * 
   * @example
   * sam@szpczf
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      invisible: 'Invisible',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      invisible: 'boolean',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

