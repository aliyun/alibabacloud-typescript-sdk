// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListNavigationByFormTypeResponseBodyResultTitle } from "./ListNavigationByFormTypeResponseBodyResultTitle";


export class ListNavigationByFormTypeResponseBodyResult extends $dara.Model {
  /**
   * @example
   * FORM-EF6Yxxx
   */
  formUuid?: string;
  /**
   * @example
   * TPROC--X1Gxxx
   */
  processCode?: string;
  title?: ListNavigationByFormTypeResponseBodyResultTitle;
  static names(): { [key: string]: string } {
    return {
      formUuid: 'FormUuid',
      processCode: 'ProcessCode',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      formUuid: 'string',
      processCode: 'string',
      title: ListNavigationByFormTypeResponseBodyResultTitle,
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

