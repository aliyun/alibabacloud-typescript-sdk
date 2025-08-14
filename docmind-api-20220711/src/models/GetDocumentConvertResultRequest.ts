// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDocumentConvertResultRequest extends $dara.Model {
  /**
   * @example
   * docmind-20220816-1e89d65c
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

