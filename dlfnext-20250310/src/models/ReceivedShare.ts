// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReceivedShare extends $dara.Model {
  /**
   * @example
   * catalog_name
   */
  catalogName?: string;
  /**
   * @example
   * demo
   */
  comment?: string;
  /**
   * @example
   * 1744970111419
   */
  createdAt?: number;
  /**
   * @example
   * acs:ram::[accountId]:root
   */
  createdBy?: string;
  enableWrite?: boolean;
  /**
   * @example
   * acs:ram::[accountId]:root
   */
  owner?: string;
  /**
   * @example
   * 1111
   */
  providerTenantId?: number;
  /**
   * @example
   * 1111
   */
  shareId?: string;
  /**
   * @example
   * share_name
   */
  shareName?: string;
  /**
   * @example
   * 1744970111419
   */
  updatedAt?: number;
  /**
   * @example
   * acs:ram::[accountId]:root
   */
  updatedBy?: string;
  static names(): { [key: string]: string } {
    return {
      catalogName: 'catalogName',
      comment: 'comment',
      createdAt: 'createdAt',
      createdBy: 'createdBy',
      enableWrite: 'enableWrite',
      owner: 'owner',
      providerTenantId: 'providerTenantId',
      shareId: 'shareId',
      shareName: 'shareName',
      updatedAt: 'updatedAt',
      updatedBy: 'updatedBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogName: 'string',
      comment: 'string',
      createdAt: 'number',
      createdBy: 'string',
      enableWrite: 'boolean',
      owner: 'string',
      providerTenantId: 'number',
      shareId: 'string',
      shareName: 'string',
      updatedAt: 'number',
      updatedBy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

