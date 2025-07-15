// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddShowIntoShowListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 987DA143-A39C-5B5D-AF5B-3B07944A0036
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
   * The list of resources that failed to be added and the reason for failure.
   * 
   * @example
   * failedList[Show1, Show2...]
   */
  failedList?: string;
  /**
   * @remarks
   * The IDs of the episodes that were added.
   * 
   * @example
   * f1933f16-5467-4308-b3a9-e8d451a90999,547436b8-c839-4469-a2c0-704c1ce5ce00
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

