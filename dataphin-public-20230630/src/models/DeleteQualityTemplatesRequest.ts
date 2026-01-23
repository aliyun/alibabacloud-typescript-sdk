// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteQualityTemplatesRequestDeleteCommand extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  templateIdList?: number[];
  static names(): { [key: string]: string } {
    return {
      templateIdList: 'TemplateIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateIdList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.templateIdList)) {
      $dara.Model.validateArray(this.templateIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQualityTemplatesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  deleteCommand?: DeleteQualityTemplatesRequestDeleteCommand;
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
      deleteCommand: 'DeleteCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteCommand: DeleteQualityTemplatesRequestDeleteCommand,
      opTenantId: 'number',
    };
  }

  validate() {
    if(this.deleteCommand && typeof (this.deleteCommand as any).validate === 'function') {
      (this.deleteCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

