// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetCasterConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The production studio ID. This ID can be used as a request parameter for querying the production studio stream address, starting the production studio, adding video resources, adding layouts, querying the layout list, adding components, and adding a program list.
   * 
   * @example
   * b4810848-bcf9-4aef-bd4a-e6bba2d9****
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

