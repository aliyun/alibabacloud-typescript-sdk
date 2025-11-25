// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIpsPrivateAssocRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @example
   * 258039427902****
   */
  memberUid?: number;
  /**
   * @example
   * 20
   */
  pageSize?: string;
  /**
   * @example
   * 203.0.113.1
   */
  publicIp?: string;
  /**
   * @example
   * ngw-c5vhmjdfp5t****
   */
  resourceId?: string;
  /**
   * @example
   * close
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      lang: 'Lang',
      memberUid: 'MemberUid',
      pageSize: 'PageSize',
      publicIp: 'PublicIp',
      resourceId: 'ResourceId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'string',
      lang: 'string',
      memberUid: 'number',
      pageSize: 'string',
      publicIp: 'string',
      resourceId: 'string',
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

