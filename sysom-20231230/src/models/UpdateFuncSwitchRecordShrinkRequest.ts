// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateFuncSwitchRecordShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Diagnosis channel (currently fixed to the ecs channel)
   * 
   * This parameter is required.
   * 
   * @example
   * ecs
   */
  channel?: string;
  /**
   * @remarks
   * Diagnosis parameters. Different diagnosis types require different diagnosis parameters. You can use this field to filter records whose parameters match specified values.
   * 
   * This parameter is required.
   */
  paramsShrink?: string;
  /**
   * @remarks
   * Service Name
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

