// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefreshErObjectCachesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the refresh task. Separate multiple IDs with commas (,).
   * 
   * @example
   * 95248880
   */
  refreshTaskId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3C6CCEC4-6B88-4D4A-93E4-D47B3D92CF8F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      refreshTaskId: 'RefreshTaskId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      refreshTaskId: 'string',
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

