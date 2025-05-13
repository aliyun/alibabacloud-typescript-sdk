// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExperimentRequestOptions extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to exactly match the experiment by name. Valid values: true and false.
   * 
   * @example
   * true
   */
  matchNameExactly?: string;
  static names(): { [key: string]: string } {
    return {
      matchNameExactly: 'match_name_exactly',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchNameExactly: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

