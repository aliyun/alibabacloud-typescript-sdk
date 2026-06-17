// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIpsPrivateAssocRequest extends $dara.Model {
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - **zh** (default): Chinese.
   * 
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the resource owner.
   * 
   * @example
   * 258039427902****
   */
  memberUid?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 20
   */
  pageSize?: string;
  /**
   * @remarks
   * The public IP address of the instance.
   * 
   * @example
   * 203.0.113.1
   */
  publicIp?: string;
  /**
   * @remarks
   * The ID of the resource.
   * 
   * @example
   * ngw-c5vhmjdfp5t****
   */
  resourceId?: string;
  /**
   * @remarks
   * The status of the asset.
   * 
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

