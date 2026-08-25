// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOrCreateInvitationCodeRequest extends $dara.Model {
  /**
   * @remarks
   * The validity period in days, calculated from the current time. Set to -1 for permanent validity.
   * 
   * @example
   * 1
   */
  expireDays?: number;
  /**
   * @remarks
   * The validity period in minutes, calculated from the current time. Set to -1 for permanent validity.
   * 
   * @example
   * 10
   */
  expireMinutes?: number;
  /**
   * @remarks
   * The terminal group ID.
   * 
   * @example
   * tg-XXX
   */
  terminalGroupId?: string;
  /**
   * @remarks
   * The validity period type. Valid values:
   * - 1: The response returns the expiration in days. This is the default value if Type is not specified.
   * - 2: The response returns the expiration in minutes.
   * 
   * @example
   * cron
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      expireDays: 'ExpireDays',
      expireMinutes: 'ExpireMinutes',
      terminalGroupId: 'TerminalGroupId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireDays: 'number',
      expireMinutes: 'number',
      terminalGroupId: 'string',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

