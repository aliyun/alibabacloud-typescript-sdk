// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDailyPlayStatisResponseBodyDailyPlayStatisList extends $dara.Model {
  appId?: number;
  date?: string;
  flow?: number;
  mediaId?: string;
  playCount?: number;
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      date: 'Date',
      flow: 'Flow',
      mediaId: 'MediaId',
      playCount: 'PlayCount',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      date: 'string',
      flow: 'number',
      mediaId: 'string',
      playCount: 'number',
      userId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDailyPlayStatisResponseBody extends $dara.Model {
  dailyPlayStatisList?: GetDailyPlayStatisResponseBodyDailyPlayStatisList[];
  mediaId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dailyPlayStatisList: 'DailyPlayStatisList',
      mediaId: 'MediaId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dailyPlayStatisList: { 'type': 'array', 'itemType': GetDailyPlayStatisResponseBodyDailyPlayStatisList },
      mediaId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dailyPlayStatisList)) {
      $dara.Model.validateArray(this.dailyPlayStatisList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

