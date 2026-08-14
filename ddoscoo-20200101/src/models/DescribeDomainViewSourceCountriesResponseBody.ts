// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainViewSourceCountriesResponseBodySourceCountrys extends $dara.Model {
  count?: number;
  countryId?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      countryId: 'CountryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      countryId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainViewSourceCountriesResponseBody extends $dara.Model {
  requestId?: string;
  sourceCountrys?: DescribeDomainViewSourceCountriesResponseBodySourceCountrys[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      sourceCountrys: 'SourceCountrys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sourceCountrys: { 'type': 'array', 'itemType': DescribeDomainViewSourceCountriesResponseBodySourceCountrys },
    };
  }

  validate() {
    if(Array.isArray(this.sourceCountrys)) {
      $dara.Model.validateArray(this.sourceCountrys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

