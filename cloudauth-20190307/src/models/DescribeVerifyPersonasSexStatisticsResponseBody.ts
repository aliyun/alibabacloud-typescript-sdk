// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVerifyPersonasSexStatisticsResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * The number of authenticated users aged 14 and under.
   * 
   * @example
   * 0
   */
  age0To14Cnt?: number;
  /**
   * @remarks
   * The proportion of authenticated users aged 14 and under.
   * 
   * @example
   * 0
   */
  age0To14Rate?: string;
  /**
   * @remarks
   * The number of authenticated users aged 14 to 18.
   * 
   * @example
   * 0
   */
  age14To18Cnt?: number;
  /**
   * @remarks
   * The proportion of authenticated users aged 14 to 18.
   * 
   * @example
   * 0
   */
  age14To18Rate?: string;
  /**
   * @remarks
   * The number of authenticated users aged 18 to 35.
   * 
   * @example
   * 9
   */
  age18To35Cnt?: number;
  /**
   * @remarks
   * The proportion of authenticated users aged 18 to 35.
   * 
   * @example
   * 64.29
   */
  age18To35Rate?: string;
  /**
   * @remarks
   * The number of authenticated users aged 35 to 50.
   * 
   * @example
   * 5
   */
  age35To50Cnt?: number;
  /**
   * @remarks
   * The proportion of authenticated users aged 35 to 50.
   * 
   * @example
   * 35.71
   */
  age35To50Rate?: string;
  /**
   * @remarks
   * The number of authenticated users aged 50 and over.
   * 
   * @example
   * 0
   */
  age50To999Cnt?: number;
  /**
   * @remarks
   * The number of authenticated users aged 50 and over.
   * 
   * @example
   * 0
   */
  age50To999Rate?: string;
  /**
   * @remarks
   * The total number of authenticated users.
   * 
   * @example
   * 14
   */
  allUserCnt?: number;
  /**
   * @remarks
   * The number of female authenticated users.
   * 
   * @example
   * 4
   */
  femaleCnt?: number;
  /**
   * @remarks
   * The proportion of female authenticated users.
   * 
   * @example
   * 28.57
   */
  femaleRate?: string;
  /**
   * @remarks
   * The number of male authenticated users.
   * 
   * @example
   * 10
   */
  maleCnt?: number;
  /**
   * @remarks
   * The proportion of male authenticated users.
   * 
   * @example
   * 71.43
   */
  maleRate?: string;
  static names(): { [key: string]: string } {
    return {
      age0To14Cnt: 'Age0To14Cnt',
      age0To14Rate: 'Age0To14Rate',
      age14To18Cnt: 'Age14To18Cnt',
      age14To18Rate: 'Age14To18Rate',
      age18To35Cnt: 'Age18To35Cnt',
      age18To35Rate: 'Age18To35Rate',
      age35To50Cnt: 'Age35To50Cnt',
      age35To50Rate: 'Age35To50Rate',
      age50To999Cnt: 'Age50To999Cnt',
      age50To999Rate: 'Age50To999Rate',
      allUserCnt: 'AllUserCnt',
      femaleCnt: 'FemaleCnt',
      femaleRate: 'FemaleRate',
      maleCnt: 'MaleCnt',
      maleRate: 'MaleRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      age0To14Cnt: 'number',
      age0To14Rate: 'string',
      age14To18Cnt: 'number',
      age14To18Rate: 'string',
      age18To35Cnt: 'number',
      age18To35Rate: 'string',
      age35To50Cnt: 'number',
      age35To50Rate: 'string',
      age50To999Cnt: 'number',
      age50To999Rate: 'string',
      allUserCnt: 'number',
      femaleCnt: 'number',
      femaleRate: 'string',
      maleCnt: 'number',
      maleRate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifyPersonasSexStatisticsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 013DA6E1-3F37-5579-B979-2F12B7E92450
   */
  requestId?: string;
  /**
   * @remarks
   * The returned data.
   */
  resultObject?: DescribeVerifyPersonasSexStatisticsResponseBodyResultObject;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultObject: 'ResultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultObject: DescribeVerifyPersonasSexStatisticsResponseBodyResultObject,
    };
  }

  validate() {
    if(this.resultObject && typeof (this.resultObject as any).validate === 'function') {
      (this.resultObject as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

