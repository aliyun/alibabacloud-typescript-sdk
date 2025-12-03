// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAccessGroupResponseBody extends $dara.Model {
  /**
   * @example
   * acg-e3755fb0-358d-4286-9942-8d461048****
   */
  accessGroupId?: string;
  /**
   * @example
   * 55C5FFD6-BF99-41BD-9C66-FFF39189****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessGroupId: 'AccessGroupId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessGroupId: 'string',
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

