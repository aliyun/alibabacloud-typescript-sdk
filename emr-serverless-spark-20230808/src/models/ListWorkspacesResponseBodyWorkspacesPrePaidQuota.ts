// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkspacesResponseBodyWorkspacesPrePaidQuota extends $dara.Model {
  /**
   * @remarks
   * The amount of resources that are allocated by a subscription quota.
   * 
   * @example
   * {\\"cpu\\":\\"1\\",\\"memory\\":\\"4Gi\\",\\"cu\\":\\"1\\"}
   */
  allocatedResource?: string;
  /**
   * @remarks
   * Indicates whether auto-renewal is enabled for the subscription quota.
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  autoRenewal?: boolean;
  /**
   * @remarks
   * The creation time of the subscription quota.
   * 
   * @example
   * 1745683200000
   */
  createTime?: number;
  /**
   * @remarks
   * The expiration time of the subscription quota.
   * 
   * @example
   * 1740537153000
   */
  expireTime?: number;
  /**
   * @remarks
   * The ID of the instance that is generated when you purchase the subscription quota.
   * 
   * @example
   * i-abc12345
   */
  instanceId?: string;
  /**
   * @remarks
   * The maximum amount of resources that can be used in a subscription quota.
   * 
   * @example
   * {\\"cpu\\":\\"1\\",\\"memory\\":\\"4Gi\\",\\"cu\\":\\"1\\"}
   */
  maxResource?: string;
  /**
   * @remarks
   * The status of the subscription quota. Valid values:
   * 
   * *   NORMAL
   * *   WAIT_FOR_EXPIRE
   * *   EXPIRED
   * 
   * @example
   * NORMAL
   */
  paymentStatus?: string;
  /**
   * @remarks
   * The amount of resources that are used.
   * 
   * @example
   * {\\"cpu\\":\\"0\\",\\"memory\\":\\"0Gi\\",\\"cu\\":\\"0\\"}
   */
  usedResource?: string;
  static names(): { [key: string]: string } {
    return {
      allocatedResource: 'allocatedResource',
      autoRenewal: 'autoRenewal',
      createTime: 'createTime',
      expireTime: 'expireTime',
      instanceId: 'instanceId',
      maxResource: 'maxResource',
      paymentStatus: 'paymentStatus',
      usedResource: 'usedResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocatedResource: 'string',
      autoRenewal: 'boolean',
      createTime: 'number',
      expireTime: 'number',
      instanceId: 'string',
      maxResource: 'string',
      paymentStatus: 'string',
      usedResource: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

