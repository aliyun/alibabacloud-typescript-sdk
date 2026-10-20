// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Share extends $dara.Model {
  /**
   * @remarks
   * The comment information of the share.
   * 
   * @example
   * demo
   */
  comment?: string;
  /**
   * @remarks
   * The creation time of the share.
   * 
   * @example
   * 1744970111419
   */
  createdAt?: number;
  /**
   * @remarks
   * The creator.
   * 
   * @example
   * acs:ram::[accountId]:root
   */
  createdBy?: string;
  /**
   * @remarks
   * Specifies whether write operations are allowed on shared resources.
   * 
   * @example
   * false
   */
  enableWrite?: boolean;
  /**
   * @remarks
   * The owner of the share.
   * 
   * @example
   * acs:ram::[accountId]:root
   */
  owner?: string;
  /**
   * @remarks
   * The account ID of the provider.
   * 
   * @example
   * 1111
   */
  providerTenantId?: number;
  /**
   * @remarks
   * The share ID.
   * 
   * @example
   * 1111
   */
  shareId?: string;
  /**
   * @remarks
   * The share name.
   * 
   * @example
   * share_name
   */
  shareName?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 1744970111419
   */
  updatedAt?: number;
  /**
   * @remarks
   * The updater.
   * 
   * @example
   * acs:ram::[accountId]:root
   */
  updatedBy?: string;
  static names(): { [key: string]: string } {
    return {
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

