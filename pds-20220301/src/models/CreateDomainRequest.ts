// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDomainRequest extends $dara.Model {
  /**
   * @remarks
   * domain 描述
   * 
   * @example
   * 你好企业网盘开发环境
   */
  description?: string;
  /**
   * @remarks
   * If you want to perform secondary operations based on Drive and Photo Service and perform fine-grained control on your tenants, you can use the parent-child domain feature of Drive and Photo Service. For more information, join the DingTalk group whose ID is 23146118.
   * 
   * This parameter is required.
   * 
   * @example
   * 你好企业网盘
   */
  domainName?: string;
  /**
   * @remarks
   * https
   * 
   * @example
   * true
   */
  initDriveEnable?: boolean;
  /**
   * @remarks
   * http
   * 
   * @example
   * 1073741824
   */
  initDriveSize?: number;
  /**
   * @remarks
   * Create domain.
   * 
   * @example
   * bj1
   */
  parentDomainId?: string;
  /**
   * @remarks
   * The ID of the parent domain. If you want to create a child domain, specify parent_domain_id. In most cases, you do not need to create a child domain. If you want to perform secondary operations based on Drive and Photo Service, contact the customer service.
   * 
   * @example
   * 1099511627776
   */
  sizeQuota?: number;
  /**
   * @remarks
   * The information about the domain.
   * 
   * @example
   * 50
   */
  userCountQuota?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      domainName: 'domain_name',
      initDriveEnable: 'init_drive_enable',
      initDriveSize: 'init_drive_size',
      parentDomainId: 'parent_domain_id',
      sizeQuota: 'size_quota',
      userCountQuota: 'user_count_quota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      domainName: 'string',
      initDriveEnable: 'boolean',
      initDriveSize: 'number',
      parentDomainId: 'string',
      sizeQuota: 'number',
      userCountQuota: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

