// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAuditContentErrorTypesResponseBodyDataSubClasses extends $dara.Model {
  /**
   * @example
   * PunctuationError
   */
  classCode?: string;
  className?: string;
  static names(): { [key: string]: string } {
    return {
      classCode: 'ClassCode',
      className: 'ClassName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classCode: 'string',
      className: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

