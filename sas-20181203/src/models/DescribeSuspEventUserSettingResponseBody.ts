// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSuspEventUserSettingResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array that consists of the risk levels of alert notifications. Valid values:
   * 
   * *   **remind**
   * *   **suspicious**
   * *   **serious**
   */
  levelsOn?: string[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 028CF634-5268-5660-9575-48C9ED6XXXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      levelsOn: 'LevelsOn',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      levelsOn: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.levelsOn)) {
      $dara.Model.validateArray(this.levelsOn);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

