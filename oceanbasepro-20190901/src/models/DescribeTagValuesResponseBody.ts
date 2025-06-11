// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTagValuesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The mappings between tag groups and tags.
   * 
   * @example
   * "{\\"Tag group 2\\":[\\"Tag 2-1\\",\\"Tag 2-2\\"],\\"Tag group 1\\":[\\"Tag 1-1\\"]}"
   */
  map?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4C91F7BA-xxxx-xxxx-xxxx-846ECA1A9908
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      map: 'Map',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      map: 'string',
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

