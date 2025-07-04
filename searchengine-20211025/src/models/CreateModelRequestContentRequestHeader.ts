// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateModelRequestContentRequestHeader extends $dara.Model {
  /**
   * @example
   * Bearer OS-v0********6vvs
   */
  authorization?: string;
  /**
   * @example
   * application/json
   */
  contentType?: string;
  static names(): { [key: string]: string } {
    return {
      authorization: 'Authorization',
      contentType: 'Content-Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorization: 'string',
      contentType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

