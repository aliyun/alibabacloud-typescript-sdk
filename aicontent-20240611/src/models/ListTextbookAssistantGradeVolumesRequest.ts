// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTextbookAssistantGradeVolumesRequest extends $dara.Model {
  /**
   * @example
   * tc_197bf5bb81889cc79eb51ae9b8c0cea3
   */
  authToken?: string;
  /**
   * @remarks
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

