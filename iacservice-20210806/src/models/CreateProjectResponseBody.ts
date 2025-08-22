// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProjectResponseBody extends $dara.Model {
  /**
   * @example
   * p-433aead7560572f8d95b25775c
   */
  projectId?: string;
  /**
   * @example
   * 3E49127A-BB65-5CCD-AB93-0EC0A43E5446
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'projectId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
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

