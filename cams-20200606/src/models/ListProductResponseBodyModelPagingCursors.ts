// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProductResponseBodyModelPagingCursors extends $dara.Model {
  /**
   * @remarks
   * The cursor that points to the end of the page of the returned data.
   * 
   * @example
   * sjsuueu83838
   */
  after?: string;
  /**
   * @remarks
   * The cursor that points to the beginning of the page of the returned data.
   * 
   * @example
   * sjjsjdjjdjd83883
   */
  before?: string;
  static names(): { [key: string]: string } {
    return {
      after: 'After',
      before: 'Before',
    };
  }

  static types(): { [key: string]: any } {
    return {
      after: 'string',
      before: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

