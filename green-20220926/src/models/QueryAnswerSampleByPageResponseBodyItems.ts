// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAnswerSampleByPageResponseBodyItems extends $dara.Model {
  answer?: string;
  /**
   * @example
   * 2023-07-31 06:16:06
   */
  gmtCreate?: string;
  /**
   * @example
   * 1666
   */
  id?: number;
  /**
   * @example
   * custom_xxxx
   */
  libId?: string;
  /**
   * @remarks
   * UID。
   * 
   * @example
   * 104813*****2399
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      answer: 'Answer',
      gmtCreate: 'GmtCreate',
      id: 'Id',
      libId: 'LibId',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answer: 'string',
      gmtCreate: 'string',
      id: 'number',
      libId: 'string',
      uid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

