// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTestResultListRequest extends $dara.Model {
  /**
   * @example
   * {\\"conditionGroups\\": [[{\\"fieldIdentifier\\": \\"gmtModified\\", \\"operator\\": \\"MORE_THAN_AND_EQUAL\\", \\"value\\": [\\"2023-04-20 18:03:12.442140\\"], \\"className\\": \\"dateTime\\", \\"format\\": \\"input\\"}]]}
   */
  conditions?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * e27b8eace6501ce51cf5d56784
   */
  directoryIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      conditions: 'conditions',
      directoryIdentifier: 'directoryIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditions: 'string',
      directoryIdentifier: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

