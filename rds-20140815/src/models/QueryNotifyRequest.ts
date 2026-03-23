// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryNotifyRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  from?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  to?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  withConfirmed?: boolean;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      to: 'To',
      withConfirmed: 'WithConfirmed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      to: 'string',
      withConfirmed: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

