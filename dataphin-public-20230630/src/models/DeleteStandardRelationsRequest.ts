// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteStandardRelationsRequestDeleteCommandStandardRefList extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2
   */
  standardId?: number;
  static names(): { [key: string]: string } {
    return {
      standardId: 'StandardId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      standardId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteStandardRelationsRequestDeleteCommand extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * RELATIVE
   */
  relationType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  standardId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  standardRefList?: DeleteStandardRelationsRequestDeleteCommandStandardRefList[];
  static names(): { [key: string]: string } {
    return {
      relationType: 'RelationType',
      standardId: 'StandardId',
      standardRefList: 'StandardRefList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      relationType: 'string',
      standardId: 'number',
      standardRefList: { 'type': 'array', 'itemType': DeleteStandardRelationsRequestDeleteCommandStandardRefList },
    };
  }

  validate() {
    if(Array.isArray(this.standardRefList)) {
      $dara.Model.validateArray(this.standardRefList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteStandardRelationsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  deleteCommand?: DeleteStandardRelationsRequestDeleteCommand;
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
      deleteCommand: DeleteStandardRelationsRequestDeleteCommand,
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

