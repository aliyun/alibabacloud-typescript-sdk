// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceFuncStatusShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The channel name.
   * 
   * This parameter is required.
   * 
   * @example
   * ecs
   */
  channel?: string;
  /**
   * @remarks
   * The diagnostic parameters. Different types of diagnostics require different diagnostic parameters. You can use this field to filter records whose parameters match the specified values.
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
  static names(): { [key: string]: string } {
    return {
      channel: 'channel',
      paramsShrink: 'params',
      serviceName: 'service_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: 'string',
      paramsShrink: 'string',
      serviceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

