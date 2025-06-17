// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainSrcTopUrlVisitResponseBodyUrl500ListUrlList extends $dara.Model {
  /**
   * @remarks
   * The amount of network traffic. Unit: bytes.
   * 
   * @example
   * 460486880
   */
  flow?: string;
  /**
   * @remarks
   * The proportion of network traffic consumed to access the URL.
   * 
   * @example
   * 0.35
   */
  flowProportion?: number;
  /**
   * @remarks
   * The complete URL.
   * 
   * @example
   * http://example.com/nn_live/nn_x64/a0.m3u8
   */
  urlDetail?: string;
  /**
   * @remarks
   * The number of visits to the URL.
   * 
   * @example
   * 161673
   */
  visitData?: string;
  /**
   * @remarks
   * The proportion of visits to the URL.
   * 
   * @example
   * 0.35
   */
  visitProportion?: number;
  static names(): { [key: string]: string } {
    return {
      flow: 'Flow',
      flowProportion: 'FlowProportion',
      urlDetail: 'UrlDetail',
      visitData: 'VisitData',
      visitProportion: 'VisitProportion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flow: 'string',
      flowProportion: 'number',
      urlDetail: 'string',
      visitData: 'string',
      visitProportion: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

