// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveAgentFromSkillGroupResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2
   */
  successCount?: number;
  static names(): { [key: string]: string } {
    return {
      successCount: 'SuccessCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      successCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

