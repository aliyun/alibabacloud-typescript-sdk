// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePlayUserTotalResponseBodyUserPlayStatisTotalsUserPlayStatisTotalUV extends $dara.Model {
  android?: string;
  flash?: string;
  HTML5?: string;
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
  android?: string;
  flash?: string;
  HTML5?: string;
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
  date?: string;
  playDuration?: string;
  playRange?: string;
  UV?: DescribePlayUserTotalResponseBodyUserPlayStatisTotalsUserPlayStatisTotalUV;
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

