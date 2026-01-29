// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartRayClusterResponseBody extends $dara.Model {
  /**
   * @example
   * 8CE06D75-E6A2-505D-9B4B-31DEE3D98A04
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
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

