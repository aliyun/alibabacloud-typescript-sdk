// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePortViewSourceCountriesResponseBodySourceCountrys } from "./DescribePortViewSourceCountriesResponseBodySourceCountrys";


export class DescribePortViewSourceCountriesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C33EB3D5-AF96-43CA-9C7E-37A81BC06A1E
   */
  requestId?: string;
  /**
   * @remarks
   * The details about the country or area from which the requests are sent.
   */
  sourceCountrys?: DescribePortViewSourceCountriesResponseBodySourceCountrys[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      sourceCountrys: 'SourceCountrys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sourceCountrys: { 'type': 'array', 'itemType': DescribePortViewSourceCountriesResponseBodySourceCountrys },
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

