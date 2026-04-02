// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFunagentsInput extends $dara.Model {
  funagentName?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      funagentName: 'funagentName',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      funagentName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

