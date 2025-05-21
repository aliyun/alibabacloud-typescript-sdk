// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryIndividuationTextTaskResponseBodyTextList extends $dara.Model {
  /**
   * @example
   * 0
   */
  status?: number;
  /**
   * @example
   * 2761
   */
  textId?: string;
  /**
   * @example
   * 11
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'status',
      textId: 'textId',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      textId: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

