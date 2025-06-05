// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSkillRequest extends $dara.Model {
  /**
   * @example
   * qweq-1231-jbarr-9940-asdf
   */
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'groupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

