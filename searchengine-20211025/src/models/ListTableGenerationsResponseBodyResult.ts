// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTableGenerationsResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The ID of the full index version.
   * 
   * @example
   * 1708674867
   */
  generationId?: number;
  static names(): { [key: string]: string } {
    return {
      generationId: 'generationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      generationId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

