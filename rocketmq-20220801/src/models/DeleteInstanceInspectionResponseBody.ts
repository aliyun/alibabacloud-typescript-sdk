// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteInstanceInspectionResponseBody extends $dara.Model {
  /**
   * @example
   * true
   */
  ok?: boolean;
  static names(): { [key: string]: string } {
    return {
      ok: 'ok',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ok: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

