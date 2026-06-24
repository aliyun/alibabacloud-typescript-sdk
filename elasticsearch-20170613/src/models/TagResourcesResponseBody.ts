// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TagResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3D8795D9-8FF5-46B2-86E6-E3B407*******
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result. Valid values:
   * 
   * - true: The tag-resource relationships are created.
   * - false: The tag-resource relationships failed to be created.
   * 
   * @example
   * true
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

