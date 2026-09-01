// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveSuspEventUserSettingRequest extends $dara.Model {
  /**
   * @remarks
   * The data source of the exception. Set the value to sas.
   * 
   * @example
   * sas
   */
  from?: string;
  /**
   * @remarks
   * The severities of alert notifications. Valid values:
   * 
   * *   **remind**
   * *   **suspicious**
   * *   **serious**
   * 
   * @example
   * suspicious,serious,remind
   */
  levelsOn?: string;
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

