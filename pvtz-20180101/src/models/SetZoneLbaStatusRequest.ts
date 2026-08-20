// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetZoneLbaStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see How to ensure idempotence.
   * 
   * @example
   * 210bc45716943908285687176dcf0a
   */
  clientToken?: string;
  /**
   * @remarks
   * The language.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The resolution line.
   * 
   * This parameter is required.
   * 
   * @example
   * default
   */
  line?: string;
  /**
   * @remarks
   * Specifies whether to enable the weight configuration. Valid values:
   * 
   * - **true**: Enabled.
   * - **false**: Disabled.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  open?: boolean;
  /**
   * @remarks
   * The hostname record.
   * 
   * This parameter is required.
   * 
   * @example
   * www
   */
  rr?: string;
  /**
   * @remarks
   * The DNS record type. Currently, only **A** and **AAAA** record types support the weight toggle.
   * 
   * This parameter is required.
   * 
   * @example
   * A
   */
  type?: string;
  /**
   * @remarks
   * The IP address of the user.
   * 
   * @example
   * 127.0.0.1
   */
  userClientIp?: string;
  /**
   * @remarks
   * Zone ID。
   * 
   * This parameter is required.
   * 
   * @example
   * 8fd507b3eec6bba982060561f5624ea6
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      lang: 'Lang',
      line: 'Line',
      open: 'Open',
      rr: 'Rr',
      type: 'Type',
      userClientIp: 'UserClientIp',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      lang: 'string',
      line: 'string',
      open: 'boolean',
      rr: 'string',
      type: 'string',
      userClientIp: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

