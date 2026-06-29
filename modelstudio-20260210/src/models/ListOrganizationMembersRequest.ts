// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOrganizationMembersRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to filter by seat assignment.
   * 
   * @example
   * true
   */
  hasSeat?: boolean;
  /**
   * @remarks
   * Fuzzy filter by member name. Matches accountName or email and is case-insensitive.
   * 
   * @example
   * 成员名称
   */
  name?: string;
  /**
   * @remarks
   * The page number, starting from 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 20. Maximum value: 100.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Filters by member status, such as ACTIVE or FROZEN. Set to null to disable filtering.
   * 
   * @example
   * ACTIVE
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      hasSeat: 'HasSeat',
      name: 'Name',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasSeat: 'boolean',
      name: 'string',
      pageNum: 'number',
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

