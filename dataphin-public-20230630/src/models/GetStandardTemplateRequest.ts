// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStandardTemplateRequestFilterQuery extends $dara.Model {
  /**
   * @example
   * 1
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class GetStandardTemplateRequest extends $dara.Model {
  filterQuery?: GetStandardTemplateRequestFilterQuery;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 22
   */
  id?: number;
  nullable?: boolean;
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
      filterQuery: 'FilterQuery',
      id: 'Id',
      nullable: 'Nullable',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterQuery: GetStandardTemplateRequestFilterQuery,
      id: 'number',
      nullable: 'boolean',
      opTenantId: 'number',
    };
  }

  validate() {
    if(this.filterQuery && typeof (this.filterQuery as any).validate === 'function') {
      (this.filterQuery as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

