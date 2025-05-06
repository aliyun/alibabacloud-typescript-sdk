// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDoctorApplicationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The diagnostics list.
   */
  suggestions?: string[];
  static names(): { [key: string]: string } {
    return {
      suggestions: 'suggestions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      suggestions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.suggestions)) {
      $dara.Model.validateArray(this.suggestions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

