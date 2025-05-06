// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunSearchCaseFullTextResponseBodyDataCaseResultCaseDomainTrialCourt extends $dara.Model {
  city?: string;
  commonLevel?: string;
  country?: string;
  county?: string;
  district?: string;
  name?: string;
  province?: string;
  /**
   * @example
   * “”
   */
  specialLevel?: string;
  static names(): { [key: string]: string } {
    return {
      city: 'city',
      commonLevel: 'commonLevel',
      country: 'country',
      county: 'county',
      district: 'district',
      name: 'name',
      province: 'province',
      specialLevel: 'specialLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      city: 'string',
      commonLevel: 'string',
      country: 'string',
      county: 'string',
      district: 'string',
      name: 'string',
      province: 'string',
      specialLevel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

