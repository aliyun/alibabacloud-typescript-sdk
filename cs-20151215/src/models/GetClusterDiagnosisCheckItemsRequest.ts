// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetClusterDiagnosisCheckItemsRequest extends $dara.Model {
  /**
   * @remarks
   * The query language.
   * 
   * @example
   * zh_CN
   */
  language?: string;
  static names(): { [key: string]: string } {
    return {
      language: 'language',
    };
  }

  static types(): { [key: string]: any } {
    return {
      language: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

