// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStandardRequestStandardGetQuery extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to return associated standards and associated lookup tables. Default value: false.
   */
  needRelation?: boolean;
  /**
   * @remarks
   * Specifies whether to return a null value when the standard does not exist. If set to false, an exception is thrown. Default value: true.
   */
  nullable?: boolean;
  /**
   * @remarks
   * The standard ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  standardId?: number;
  /**
   * @remarks
   * The stage to which the standard belongs. Valid values:
   * - dev: development stage.
   * - prod: production stage.
   * 
   * Default value: prod.
   * 
   * @example
   * dev
   */
  standardStage?: string;
  /**
   * @remarks
   * The version number. If left empty, the latest version is used.
   * 
   * @example
   * 1
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      needRelation: 'NeedRelation',
      nullable: 'Nullable',
      standardId: 'StandardId',
      standardStage: 'StandardStage',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      needRelation: 'boolean',
      nullable: 'boolean',
      standardId: 'number',
      standardStage: 'string',
      version: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStandardRequest extends $dara.Model {
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
  /**
   * @remarks
   * The query command.
   * 
   * This parameter is required.
   */
  standardGetQuery?: GetStandardRequestStandardGetQuery;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      standardGetQuery: 'StandardGetQuery',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      standardGetQuery: GetStandardRequestStandardGetQuery,
    };
  }

  validate() {
    if(this.standardGetQuery && typeof (this.standardGetQuery as any).validate === 'function') {
      (this.standardGetQuery as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

