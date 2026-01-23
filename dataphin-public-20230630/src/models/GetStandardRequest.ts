// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStandardRequestStandardGetQuery extends $dara.Model {
  needRelation?: boolean;
  nullable?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  standardId?: number;
  /**
   * @example
   * dev
   */
  standardStage?: string;
  /**
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

