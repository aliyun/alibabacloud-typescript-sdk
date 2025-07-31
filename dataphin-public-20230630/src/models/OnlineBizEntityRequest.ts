// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OnlineBizEntityRequestOnlineCommand extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 6798087749072704
   */
  bizUnitId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  comment?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 101001201
   */
  id?: number;
  /**
   * @remarks
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
   * This parameter is required.
   */
  onlineCommand?: OnlineBizEntityRequestOnlineCommand;
  /**
   * @remarks
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

