// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRedisAllSessionRequest extends $dara.Model {
  /**
   * @remarks
   * The reserved parameter.
   * 
   * @example
   * None
   */
  consoleContext?: string;
  /**
   * @remarks
   * The database instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * r-2zemyfd1sh1u2i****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      consoleContext: 'ConsoleContext',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consoleContext: 'string',
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

