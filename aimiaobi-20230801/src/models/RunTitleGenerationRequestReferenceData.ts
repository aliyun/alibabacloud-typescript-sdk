// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunTitleGenerationRequestReferenceData extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  contents?: string[];
  static names(): { [key: string]: string } {
    return {
      contents: 'Contents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contents: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.contents)) {
      $dara.Model.validateArray(this.contents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

