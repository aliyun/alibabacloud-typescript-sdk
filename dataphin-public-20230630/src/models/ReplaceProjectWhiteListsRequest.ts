// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReplaceProjectWhiteListsRequestReplaceCommandWhiteLists extends $dara.Model {
  /**
   * @example
   * 测试
   */
  description?: string;
  /**
   * @remarks
   * ip
   * 
   * This parameter is required.
   * 
   * @example
   * 10.1.0.2
   */
  ip?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 5432
   */
  port?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      ip: 'Ip',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      ip: 'string',
      port: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplaceProjectWhiteListsRequestReplaceCommand extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  whiteLists?: ReplaceProjectWhiteListsRequestReplaceCommandWhiteLists[];
  static names(): { [key: string]: string } {
    return {
      whiteLists: 'WhiteLists',
    };
  }

  static types(): { [key: string]: any } {
    return {
      whiteLists: { 'type': 'array', 'itemType': ReplaceProjectWhiteListsRequestReplaceCommandWhiteLists },
    };
  }

  validate() {
    if(Array.isArray(this.whiteLists)) {
      $dara.Model.validateArray(this.whiteLists);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplaceProjectWhiteListsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1030111021
   */
  id?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  replaceCommand?: ReplaceProjectWhiteListsRequestReplaceCommand;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      opTenantId: 'OpTenantId',
      replaceCommand: 'ReplaceCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      opTenantId: 'number',
      replaceCommand: ReplaceProjectWhiteListsRequestReplaceCommand,
    };
  }

  validate() {
    if(this.replaceCommand && typeof (this.replaceCommand as any).validate === 'function') {
      (this.replaceCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

