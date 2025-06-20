// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSavedQueryRequest extends $dara.Model {
  /**
   * @remarks
   * The template ID.
   * 
   * >  You can call the [ListSavedQueries](~~ListSavedQueries~~) operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * sq-GeAck****
   */
  queryId?: string;
  static names(): { [key: string]: string } {
    return {
      queryId: 'QueryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queryId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

