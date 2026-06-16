// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetInstanceGlobalizationConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The language.
   * 
   * This parameter is required.
   * 
   * @example
   * zh-Hans-CN
   */
  language?: string;
  /**
   * @remarks
   * The time zone.
   * 
   * This parameter is required.
   * 
   * @example
   * Asia/Shanghai
   */
  timeZone?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      language: 'Language',
      timeZone: 'TimeZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      language: 'string',
      timeZone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

