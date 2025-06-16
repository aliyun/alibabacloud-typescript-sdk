// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveSourcesFromTrafficMirrorSessionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A33B2C6A-89D1-4DEA-A807-A6E8CC552484
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

