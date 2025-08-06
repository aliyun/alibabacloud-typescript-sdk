// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePlayUserTotalResponseBodyUserPlayStatisTotalsUserPlayStatisTotalUV extends $dara.Model {
  /**
   * @remarks
   * The total number of unique visitors who use ApsaraVideo Player SDK for Android.
   * 
   * @example
   * 2
   */
  android?: string;
  /**
   * @remarks
   * The total number of unique visitors who use the Flash player.
   * 
   * @example
   * 1
   */
  flash?: string;
  /**
   * @remarks
   * The total number of unique visitors who use the HTML5 player.
   * 
   * @example
   * 1
   */
  HTML5?: string;
  /**
   * @remarks
   * The total number of unique visitors who use ApsaraVideo Player SDK for iOS.
   * 
   * @example
   * 0
   */
  iOS?: string;
  static names(): { [key: string]: string } {
    return {
      android: 'Android',
      flash: 'Flash',
      HTML5: 'HTML5',
      iOS: 'iOS',
    };
  }

  static types(): { [key: string]: any } {
    return {
      android: 'string',
      flash: 'string',
      HTML5: 'string',
      iOS: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlayUserTotalResponseBodyUserPlayStatisTotalsUserPlayStatisTotalVV extends $dara.Model {
  /**
   * @remarks
   * The total number of video views played by using ApsaraVideo Player SDK for Android.
   * 
   * @example
   * 161
   */
  android?: string;
  /**
   * @remarks
   * The total number of video views played by using the Flash player.
   * 
   * @example
   * 2
   */
  flash?: string;
  /**
   * @remarks
   * The total number of video views played by using the HTML5 player.
   * 
   * @example
   * 2
   */
  HTML5?: string;
  /**
   * @remarks
   * The total number of video views played by using ApsaraVideo Player SDK for iOS.
   * 
   * @example
   * 0
   */
  iOS?: string;
  static names(): { [key: string]: string } {
    return {
      android: 'Android',
      flash: 'Flash',
      HTML5: 'HTML5',
      iOS: 'iOS',
    };
  }

  static types(): { [key: string]: any } {
    return {
      android: 'string',
      flash: 'string',
      HTML5: 'string',
      iOS: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlayUserTotalResponseBodyUserPlayStatisTotalsUserPlayStatisTotal extends $dara.Model {
  /**
   * @remarks
   * The date. The date is displayed in the yyyy-MM-dd format.
   * 
   * @example
   * 20170120
   */
  date?: string;
  /**
   * @remarks
   * The total playback duration. Unit: milliseconds.
   * 
   * @example
   * 9340070
   */
  playDuration?: string;
  /**
   * @remarks
   * The distribution of the playback duration.
   * 
   * @example
   * "<=1m:74.3%;>1<=5m:22.8%;>5<=10m:1.0%;>10<=15m:1.0%;>15<=30m:1.0%"
   */
  playRange?: string;
  /**
   * @remarks
   * The total number of unique visitors.
   */
  UV?: DescribePlayUserTotalResponseBodyUserPlayStatisTotalsUserPlayStatisTotalUV;
  /**
   * @remarks
   * The total number of video views.
   */
  VV?: DescribePlayUserTotalResponseBodyUserPlayStatisTotalsUserPlayStatisTotalVV;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      playDuration: 'PlayDuration',
      playRange: 'PlayRange',
      UV: 'UV',
      VV: 'VV',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      playDuration: 'string',
      playRange: 'string',
      UV: DescribePlayUserTotalResponseBodyUserPlayStatisTotalsUserPlayStatisTotalUV,
      VV: DescribePlayUserTotalResponseBodyUserPlayStatisTotalsUserPlayStatisTotalVV,
    };
  }

  validate() {
    if(this.UV && typeof (this.UV as any).validate === 'function') {
      (this.UV as any).validate();
    }
    if(this.VV && typeof (this.VV as any).validate === 'function') {
      (this.VV as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlayUserTotalResponseBodyUserPlayStatisTotals extends $dara.Model {
  userPlayStatisTotal?: DescribePlayUserTotalResponseBodyUserPlayStatisTotalsUserPlayStatisTotal[];
  static names(): { [key: string]: string } {
    return {
      userPlayStatisTotal: 'UserPlayStatisTotal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userPlayStatisTotal: { 'type': 'array', 'itemType': DescribePlayUserTotalResponseBodyUserPlayStatisTotalsUserPlayStatisTotal },
    };
  }

  validate() {
    if(Array.isArray(this.userPlayStatisTotal)) {
      $dara.Model.validateArray(this.userPlayStatisTotal);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlayUserTotalResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1FAFB884-D5A7-47D1-****-8928AA9C8720
   */
  requestId?: string;
  /**
   * @remarks
   * The daily playback statistics.
   */
  userPlayStatisTotals?: DescribePlayUserTotalResponseBodyUserPlayStatisTotals;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userPlayStatisTotals: 'UserPlayStatisTotals',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userPlayStatisTotals: DescribePlayUserTotalResponseBodyUserPlayStatisTotals,
    };
  }

  validate() {
    if(this.userPlayStatisTotals && typeof (this.userPlayStatisTotals as any).validate === 'function') {
      (this.userPlayStatisTotals as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

