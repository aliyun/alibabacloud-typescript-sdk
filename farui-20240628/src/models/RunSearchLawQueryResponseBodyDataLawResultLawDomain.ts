// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunSearchLawQueryResponseBodyDataLawResultLawDomain extends $dara.Model {
  abolitionBasis?: string;
  implementYearMonthDate?: string;
  /**
   * @example
   * null
   */
  invalidBasis?: string;
  /**
   * @example
   * ""
   */
  issuingNo?: string;
  issuingOrgan?: string;
  /**
   * @example
   * b2274825c8c3bc2343ca73680243ddc8
   */
  lawId?: string;
  /**
   * @example
   * ccc209683be1509676174fd6890f24b8
   */
  lawItemId?: string;
  lawName?: string;
  lawOrder?: string;
  lawSourceContent?: string;
  lawTitle?: string;
  /**
   * @example
   * "[]"
   */
  modifyBasis?: string;
  potencyLevel?: string;
  releaseYearMonthDate?: string;
  /**
   * @example
   * null
   */
  thematicClassify?: string;
  timeliness?: string;
  static names(): { [key: string]: string } {
    return {
      abolitionBasis: 'abolitionBasis',
      implementYearMonthDate: 'implementYearMonthDate',
      invalidBasis: 'invalidBasis',
      issuingNo: 'issuingNo',
      issuingOrgan: 'issuingOrgan',
      lawId: 'lawId',
      lawItemId: 'lawItemId',
      lawName: 'lawName',
      lawOrder: 'lawOrder',
      lawSourceContent: 'lawSourceContent',
      lawTitle: 'lawTitle',
      modifyBasis: 'modifyBasis',
      potencyLevel: 'potencyLevel',
      releaseYearMonthDate: 'releaseYearMonthDate',
      thematicClassify: 'thematicClassify',
      timeliness: 'timeliness',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abolitionBasis: 'string',
      implementYearMonthDate: 'string',
      invalidBasis: 'string',
      issuingNo: 'string',
      issuingOrgan: 'string',
      lawId: 'string',
      lawItemId: 'string',
      lawName: 'string',
      lawOrder: 'string',
      lawSourceContent: 'string',
      lawTitle: 'string',
      modifyBasis: 'string',
      potencyLevel: 'string',
      releaseYearMonthDate: 'string',
      thematicClassify: 'string',
      timeliness: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

