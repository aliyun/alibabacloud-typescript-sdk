// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIndividuationProjectResponseBody extends $dara.Model {
  /**
   * @example
   * 812907463682949120
   */
  projectId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 4D902811-B75C-5D1B-8882-D515F8E2F977
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

