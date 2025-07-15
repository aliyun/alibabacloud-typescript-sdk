// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveShowFromShowListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
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
  /**
   * @remarks
   * The IDs of episodes that failed to be removed and the relevant failure information.
   * 
   * @example
   * failedList[Show1, Show2...]
   */
  failedList?: string;
  /**
   * @remarks
   * The IDs of episodes that were removed.
   * 
   * @example
   * f1933f16-5467-4308-b3a9-e8d451a90999
   */
  successfulShowIds?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      showId: 'ShowId',
      failedList: 'failedList',
      successfulShowIds: 'successfulShowIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      showId: 'string',
      failedList: 'string',
      successfulShowIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

