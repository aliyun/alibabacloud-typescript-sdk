// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGroupResponseBody extends $dara.Model {
  /**
   * @example
   * g-4267dcfbf1b6d128c87adf0e95f
   */
  groupId?: string;
  /**
   * @example
   * E2D0E863-1651-5E58-823F-B451C8C24615
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'groupId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
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

