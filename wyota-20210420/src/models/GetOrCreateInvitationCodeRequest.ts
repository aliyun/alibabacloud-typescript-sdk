// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOrCreateInvitationCodeRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  expireDays?: number;
  /**
   * @example
   * 10
   */
  expireMinutes?: number;
  /**
   * @example
   * tg-XXX
   */
  terminalGroupId?: string;
  /**
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

