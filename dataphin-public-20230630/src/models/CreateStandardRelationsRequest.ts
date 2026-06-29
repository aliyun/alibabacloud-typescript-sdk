// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateStandardRelationsRequestCreateCommandStandardRefList extends $dara.Model {
  /**
   * @remarks
   * The standard ID.
   * 
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

export class CreateStandardRelationsRequestCreateCommand extends $dara.Model {
  /**
   * @remarks
   * The standard association type: RELATIVE.
   * 
   * This parameter is required.
   * 
   * @example
   * RELATIVE
   */
  relationType?: string;
  /**
   * @remarks
   * The standard ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  standardId?: number;
  /**
   * @remarks
   * The list of referenced standards.
   * 
   * This parameter is required.
   */
  standardRefList?: CreateStandardRelationsRequestCreateCommandStandardRefList[];
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
      standardRefList: { 'type': 'array', 'itemType': CreateStandardRelationsRequestCreateCommandStandardRefList },
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

export class CreateStandardRelationsRequest extends $dara.Model {
  /**
   * @remarks
   * The create command.
   * 
   * This parameter is required.
   */
  createCommand?: CreateStandardRelationsRequestCreateCommand;
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
      createCommand: 'CreateCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createCommand: CreateStandardRelationsRequestCreateCommand,
      opTenantId: 'number',
    };
  }

  validate() {
    if(this.createCommand && typeof (this.createCommand as any).validate === 'function') {
      (this.createCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

