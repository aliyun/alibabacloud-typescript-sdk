// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeProcessStatisticsRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - **zh** (default): Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The end time of the query for response tasks. The value is a 13-digit UNIX timestamp.
   * 
   * @example
   * 17561XXX77435
   */
  processActionEnd?: number;
  /**
   * @remarks
   * The start time of the query for response tasks. The value is a 13-digit UNIX timestamp.
   * 
   * @example
   * 17000XXX83572
   */
  processActionStart?: number;
  /**
   * @remarks
   * The user ID of the member to which the administrator switches the view.
   * 
   * @example
   * 1709821xxxxx3093
   */
  roleFor?: string;
  /**
   * @remarks
   * The view type. Valid values:
   * 
   * - 0 (default): the view of the current Alibaba Cloud account.
   * - 1: the view of all accounts in the enterprise.
   * 
   * @example
   * 0
   */
  roleType?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      processActionEnd: 'ProcessActionEnd',
      processActionStart: 'ProcessActionStart',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      processActionEnd: 'number',
      processActionStart: 'number',
      roleFor: 'string',
      roleType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

