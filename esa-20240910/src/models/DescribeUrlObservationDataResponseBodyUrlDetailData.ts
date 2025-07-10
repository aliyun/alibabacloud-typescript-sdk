// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUrlObservationDataResponseBodyUrlDetailData extends $dara.Model {
  /**
   * @example
   * 0.5
   */
  CLS?: number;
  /**
   * @example
   * PC
   */
  clientPlatform?: string;
  /**
   * @example
   * CN
   */
  country?: string;
  /**
   * @example
   * 123
   */
  FCP?: number;
  /**
   * @example
   * 123
   */
  FID?: number;
  /**
   * @example
   * 123
   */
  INP?: number;
  /**
   * @example
   * 123
   */
  LCP?: number;
  /**
   * @example
   * 123
   */
  TTFB?: number;
  /**
   * @example
   * example.com/test
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      CLS: 'CLS',
      clientPlatform: 'ClientPlatform',
      country: 'Country',
      FCP: 'FCP',
      FID: 'FID',
      INP: 'INP',
      LCP: 'LCP',
      TTFB: 'TTFB',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CLS: 'number',
      clientPlatform: 'string',
      country: 'string',
      FCP: 'number',
      FID: 'number',
      INP: 'number',
      LCP: 'number',
      TTFB: 'number',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

