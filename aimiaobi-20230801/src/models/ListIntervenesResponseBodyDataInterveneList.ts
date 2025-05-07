// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIntervenesResponseBodyDataInterveneList extends $dara.Model {
  /**
   * @remarks
   * id
   * 
   * @example
   * 36559
   */
  id?: string;
  query?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      query: 'Query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      query: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

