// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSessionRequest extends $dara.Model {
  /**
   * @remarks
   * The session title.
   * 
   * @example
   * Cloud resource inspection example
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

