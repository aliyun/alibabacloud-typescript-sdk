// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAppMemberRequest extends $dara.Model {
  /**
   * @example
   * 66c0c9fffeb86b450c199fcd
   */
  organizationId?: string;
  /**
   * @example
   * 1332695887xxxxxx
   */
  subjectId?: string;
  /**
   * @example
   * User
   */
  subjectType?: string;
  static names(): { [key: string]: string } {
    return {
      organizationId: 'organizationId',
      subjectId: 'subjectId',
      subjectType: 'subjectType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      organizationId: 'string',
      subjectId: 'string',
      subjectType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

