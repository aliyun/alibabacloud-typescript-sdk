// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetFormListInAppResponseBodyDataTitle } from "./GetFormListInAppResponseBodyDataTitle";


export class GetFormListInAppResponseBodyData extends $dara.Model {
  /**
   * @example
   * 012345
   */
  creator?: string;
  /**
   * @example
   * receipt
   */
  formType?: string;
  /**
   * @example
   * FORM-BAxxxxx
   */
  formUuid?: string;
  /**
   * @example
   * 2023-02-22 15:27:07
   */
  gmtCreate?: string;
  title?: GetFormListInAppResponseBodyDataTitle;
  static names(): { [key: string]: string } {
    return {
      creator: 'Creator',
      formType: 'FormType',
      formUuid: 'FormUuid',
      gmtCreate: 'GmtCreate',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creator: 'string',
      formType: 'string',
      formUuid: 'string',
      gmtCreate: 'string',
      title: GetFormListInAppResponseBodyDataTitle,
    };
  }

  validate() {
    if(this.title && typeof (this.title as any).validate === 'function') {
      (this.title as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

