// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ValidateDnsGtmCnameRrCanUseRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  cnameMode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  cnameRr?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  cnameType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  cnameZone?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      cnameMode: 'CnameMode',
      cnameRr: 'CnameRr',
      cnameType: 'CnameType',
      cnameZone: 'CnameZone',
      instanceId: 'InstanceId',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cnameMode: 'string',
      cnameRr: 'string',
      cnameType: 'string',
      cnameZone: 'string',
      instanceId: 'string',
      lang: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

