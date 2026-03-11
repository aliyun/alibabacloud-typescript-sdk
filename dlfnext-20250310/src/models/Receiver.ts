// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Receiver extends $dara.Model {
  /**
   * @example
   * comment
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
  /**
   * @example
   * receiver_name
   */
  receiverName?: string;
  /**
   * @example
   * 1111
   */
  receiverTenantId?: number;
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
      comment: 'comment',
      createdAt: 'createdAt',
      createdBy: 'createdBy',
      receiverName: 'receiverName',
      receiverTenantId: 'receiverTenantId',
      updatedAt: 'updatedAt',
      updatedBy: 'updatedBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      createdAt: 'number',
      createdBy: 'string',
      receiverName: 'string',
      receiverTenantId: 'number',
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

