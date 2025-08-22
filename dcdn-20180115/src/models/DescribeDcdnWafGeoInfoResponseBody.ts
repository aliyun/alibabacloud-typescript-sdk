// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnWafGeoInfoResponseBodyContentContinentsRegions extends $dara.Model {
  /**
   * @remarks
   * The name of the country or region.
   * 
   * @example
   * Beijing
   */
  name?: string;
  /**
   * @remarks
   * The code of the country or region.
   * 
   * @example
   * 110000
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafGeoInfoResponseBodyContentContinents extends $dara.Model {
  /**
   * @remarks
   * The district to which the country or region belongs.
   * 
   * @example
   * China
   */
  name?: string;
  /**
   * @remarks
   * The region information.
   */
  regions?: DescribeDcdnWafGeoInfoResponseBodyContentContinentsRegions[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      regions: 'Regions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      regions: { 'type': 'array', 'itemType': DescribeDcdnWafGeoInfoResponseBodyContentContinentsRegions },
    };
  }

  validate() {
    if(Array.isArray(this.regions)) {
      $dara.Model.validateArray(this.regions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafGeoInfoResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * The information about the country or region.
   */
  continents?: DescribeDcdnWafGeoInfoResponseBodyContentContinents[];
  /**
   * @remarks
   * The type of the region.
   * 
   * *   CN: China
   * *   Other: outside China
   * 
   * @example
   * CN
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      continents: 'Continents',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      continents: { 'type': 'array', 'itemType': DescribeDcdnWafGeoInfoResponseBodyContentContinents },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.continents)) {
      $dara.Model.validateArray(this.continents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafGeoInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The type of information about the country or region.
   */
  content?: DescribeDcdnWafGeoInfoResponseBodyContent[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 66A98669-CC6E-4F3E-80A6-3014697B11AE
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': DescribeDcdnWafGeoInfoResponseBodyContent },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.content)) {
      $dara.Model.validateArray(this.content);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

