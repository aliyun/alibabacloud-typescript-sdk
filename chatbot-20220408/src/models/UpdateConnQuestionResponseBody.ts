// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateConnQuestionResponseBody extends $dara.Model {
  /**
   * @example
   * 004EB5C0-9DEB-53BF-A57A-0407A6D6B3C9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

