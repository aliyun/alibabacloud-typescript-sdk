// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCasterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the production studio. You can specify the ID in a request to query the streaming URLs of the production studio, start the production studio, add a video resource, a layout, a component, or a playlist to the production studio, or query layouts of the production studio.
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

