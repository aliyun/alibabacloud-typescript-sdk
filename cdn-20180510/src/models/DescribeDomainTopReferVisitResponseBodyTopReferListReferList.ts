// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainTopReferVisitResponseBodyTopReferListReferList extends $dara.Model {
  /**
   * @remarks
   * The amount of network traffic. Unit: bytes.
   * 
   * @example
   * 200
   */
  flow?: string;
  /**
   * @remarks
   * The proportion of network traffic consumed to access the URL.
   * 
   * @example
   * 0.5
   */
  flowProportion?: number;
  /**
   * @remarks
   * The URLs to the most frequently requested web pages.
   * 
   * @example
   * learn.aliyundoc.com
   */
  referDetail?: string;
  /**
   * @remarks
   * The number of visits to the URL.
   * 
   * @example
   * 3
   */
  visitData?: string;
  /**
   * @remarks
   * The proportion of visits to the URL.
   * 
   * @example
   * 0.5
   */
  visitProportion?: number;
  static names(): { [key: string]: string } {
    return {
      flow: 'Flow',
      flowProportion: 'FlowProportion',
      referDetail: 'ReferDetail',
      visitData: 'VisitData',
      visitProportion: 'VisitProportion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flow: 'string',
      flowProportion: 'number',
      referDetail: 'string',
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

