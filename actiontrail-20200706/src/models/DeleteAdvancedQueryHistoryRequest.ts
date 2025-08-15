// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAdvancedQueryHistoryRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * query-uIkIvLiVSuCKqg0yoa****
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

