// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateFuncSwitchRecordShrinkRequest extends $dara.Model {
  xDebugId?: string;
  /**
   * @remarks
   * The diagnostic channel. Currently, this parameter is fixed to the ECS channel.
   * 
   * This parameter is required.
   * 
   * @example
   * ecs
   */
  channel?: string;
  /**
   * @remarks
   * The diagnostic parameters. Different types of diagnostics require different diagnostic parameters. You can use this field to filter records whose parameters match specified values.
   * 
   * This parameter is required.
   */
  paramsShrink?: string;
  /**
   * @remarks
   * The service name.
   * 
   * This parameter is required.
   * 
   * @example
   * livetrace
   */
  serviceName?: string;
  xSysomInvokeSource?: string;
  static names(): { [key: string]: string } {
    return {
      xDebugId: 'X-Debug-Id',
      channel: 'channel',
      paramsShrink: 'params',
      serviceName: 'service_name',
      xSysomInvokeSource: 'x-sysom-invoke-source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xDebugId: 'string',
      channel: 'string',
      paramsShrink: 'string',
      serviceName: 'string',
      xSysomInvokeSource: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

