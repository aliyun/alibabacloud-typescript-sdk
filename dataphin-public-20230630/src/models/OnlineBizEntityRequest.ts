// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OnlineBizEntityRequestOnlineCommand extends $dara.Model {
  /**
   * @remarks
   * The ID of the business unit to which the entity belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * 6798087749072704
   */
  bizUnitId?: number;
  /**
   * @remarks
   * The remarks for the offline operation.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  comment?: string;
  /**
   * @remarks
   * The ID of the business entity.
   * 
   * This parameter is required.
   * 
   * @example
   * 101001201
   */
  id?: number;
  /**
   * @remarks
   * The business type. Valid values:
   * - BIZ_OBJECT
   * - BIZ_PROCESS.
   * 
   * This parameter is required.
   * 
   * @example
   * BIZ_OBJECT
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bizUnitId: 'BizUnitId',
      comment: 'Comment',
      id: 'Id',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizUnitId: 'number',
      comment: 'string',
      id: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnlineBizEntityRequest extends $dara.Model {
  /**
   * @remarks
   * The online request.
   * 
   * This parameter is required.
   */
  onlineCommand?: OnlineBizEntityRequestOnlineCommand;
  /**
   * @remarks
   * The tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      onlineCommand: 'OnlineCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      onlineCommand: OnlineBizEntityRequestOnlineCommand,
      opTenantId: 'number',
    };
  }

  validate() {
    if(this.onlineCommand && typeof (this.onlineCommand as any).validate === 'function') {
      (this.onlineCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

