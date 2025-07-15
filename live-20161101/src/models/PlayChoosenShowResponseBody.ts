// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PlayChoosenShowResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CD8
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the episode.
   * 
   * @example
   * a2b8e671-2fe5-4642-a2ec-bf93880e****
   */
  showId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      showId: 'ShowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      showId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

