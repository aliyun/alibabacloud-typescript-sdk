// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveSuspEventUserSettingRequest extends $dara.Model {
  /**
   * @remarks
   * The source of the exception event data. Set the value to sas.
   * 
   * @example
   * sas
   */
  from?: string;
  /**
   * @remarks
   * The alert level for alert notifications. Valid values:
   * - **remind**: Reminder.
   * - **suspicious**: Suspicious.
   * - **serious**: Urgent.
   * 
   * @example
   * suspicious,serious,remind
   */
  levelsOn?: string;
  /**
   * @remarks
   * The ID of the member account in the resource directory.
   * >You can call the [DescribeMonitorAccounts](~~DescribeMonitorAccounts~~) operation to obtain this parameter.
   * 
   * @example
   * 127608589417****
   */
  resourceDirectoryAccountId?: number;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      levelsOn: 'LevelsOn',
      resourceDirectoryAccountId: 'ResourceDirectoryAccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'string',
      levelsOn: 'string',
      resourceDirectoryAccountId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

