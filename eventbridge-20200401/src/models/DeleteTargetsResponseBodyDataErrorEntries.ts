// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteTargetsResponseBodyDataErrorEntries extends $dara.Model {
  /**
   * @remarks
   * The ID of the event body that failed to be processed.
   * 
   * @example
   * target5
   */
  entryId?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * EventRuleTargetIdDuplicate
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
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

