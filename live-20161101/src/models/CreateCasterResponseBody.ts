// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCasterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the production studio. You can use this ID as a request parameter to query stream URLs, start the production studio, add video resources, add layouts, query the layout list, add components, and add playlists.
   * 
   * @example
   * a2b8e671-2fe5-4642-a2ec-bf93880e****
   */
  casterId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F****
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

