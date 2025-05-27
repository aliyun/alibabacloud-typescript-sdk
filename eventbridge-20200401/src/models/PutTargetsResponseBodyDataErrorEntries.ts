// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutTargetsResponseBodyDataErrorEntries extends $dara.Model {
  /**
   * @remarks
   * The ID of the failed event target.
   * 
   * @example
   * Mlm123456JHd2RsRoKw
   */
  entryId?: string;
  /**
   * @remarks
   * The error code returned.
   * 
   * @example
   * EventRuleTargetIdDuplicate
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * The id of event target is duplicate!
   */
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      entryId: 'EntryId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entryId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

