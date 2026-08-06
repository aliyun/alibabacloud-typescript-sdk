// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PrepayResource extends $dara.Model {
  /**
   * @remarks
   * The catalog ID.
   * 
   * @example
   * clg-xxxx
   */
  catalogId?: string;
  /**
   * @remarks
   * The catalog name.
   * 
   * @example
   * test_catalog
   */
  catalogName?: string;
  /**
   * @remarks
   * The number of CUs.
   * 
   * @example
   * 10
   */
  cu?: number;
  /**
   * @remarks
   * The time when the subscription expires.
   * 
   * @example
   * 1769356800000
   */
  expireTime?: number;
  /**
   * @remarks
   * The time when the resources are purchased.
   * 
   * @example
   * 1764070447351
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The instance ID of computing resource.
   * 
   * @example
   * dlf-cu-quota-xxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The status of the computing resource.
   * 
   * @example
   * RUNNING
   * UPGRADING
   * CEASED
   * RELEASED
   */
  instanceStatus?: string;
  static names(): { [key: string]: string } {
    return {
      catalogId: 'catalogId',
      catalogName: 'catalogName',
      cu: 'cu',
      expireTime: 'expireTime',
      gmtCreate: 'gmtCreate',
      instanceId: 'instanceId',
      instanceStatus: 'instanceStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogId: 'string',
      catalogName: 'string',
      cu: 'number',
      expireTime: 'number',
      gmtCreate: 'number',
      instanceId: 'string',
      instanceStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

