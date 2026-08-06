// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Receiver extends $dara.Model {
  /**
   * @remarks
   * The comment.
   * 
   * @example
   * comment
   */
  comment?: string;
  /**
   * @remarks
   * The time when the receiver was created.
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
   * The name of the receiver.
   * 
   * @example
   * receiver_name
   */
  receiverName?: string;
  /**
   * @remarks
   * The receiver\\"s account ID.
   * 
   * @example
   * 1111
   */
  receiverTenantId?: number;
  /**
   * @remarks
   * The time when the receiver was last updated.
   * 
   * @example
   * 1744970111419
   */
  updatedAt?: number;
  /**
   * @remarks
   * The user who last updated the receiver.
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

