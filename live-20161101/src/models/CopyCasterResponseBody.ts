// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CopyCasterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the new production studio.
   * 
   * @example
   * 1909f043-e3d3-49e9-82d6-4329ec4a****
   */
  casterId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CD8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      casterId: 'CasterId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      casterId: 'string',
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

