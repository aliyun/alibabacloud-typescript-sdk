// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OfflineStandardRequestOfflineCommand extends $dara.Model {
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
   * 1234
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      id: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OfflineStandardRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  offlineCommand?: OfflineStandardRequestOfflineCommand;
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
      offlineCommand: 'OfflineCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      offlineCommand: OfflineStandardRequestOfflineCommand,
      opTenantId: 'number',
    };
  }

  validate() {
    if(this.offlineCommand && typeof (this.offlineCommand as any).validate === 'function') {
      (this.offlineCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

