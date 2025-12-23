// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProceedingsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the filtering is complete.
   * 
   * @example
   * true
   */
  filterFinished?: boolean;
  static names(): { [key: string]: string } {
    return {
      filterFinished: 'filterFinished',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterFinished: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

