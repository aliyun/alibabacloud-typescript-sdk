// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTextbookAssistantGradeVolumesRequest extends $dara.Model {
  /**
   * @remarks
   * The authorization token. Obtain this token by calling the API that authorizes the Textbook Assistant feature.
   * 
   * @example
   * tc_197bf5bb81889cc79eb51ae9b8c0cea3
   */
  authToken?: string;
  /**
   * @remarks
   * The scenario. Valid values: `SYNC` (synchronized practice) and `EXPAND` (extended practice).
   * 
   * This parameter is required.
   * 
   * @example
   * SYNC
   */
  scenario?: string;
  static names(): { [key: string]: string } {
    return {
      authToken: 'authToken',
      scenario: 'scenario',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authToken: 'string',
      scenario: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

