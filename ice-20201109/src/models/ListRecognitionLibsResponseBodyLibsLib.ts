// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRecognitionLibsResponseBodyLibsLib extends $dara.Model {
  libDescription?: string;
  /**
   * @example
   * *************24b47865c6**************
   */
  libId?: string;
  libName?: string;
  static names(): { [key: string]: string } {
    return {
      libDescription: 'LibDescription',
      libId: 'LibId',
      libName: 'LibName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      libDescription: 'string',
      libId: 'string',
      libName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

