// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRayClusterResponseBody extends $dara.Model {
  /**
   * @example
   * ray-xxxxxxxxxxx
   */
  clusterId?: string;
  /**
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'clusterId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
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

