// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ViewInstanceRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * i-123
   */
  instanceId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * abc
   */
  terminalSessionToken?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      terminalSessionToken: 'TerminalSessionToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      terminalSessionToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

