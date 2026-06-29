// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStandardTemplateRequestFilterQuery extends $dara.Model {
  /**
   * @remarks
   * The version number. If this parameter is left empty or set to -1, the latest version is used.
   * 
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
  /**
   * @remarks
   * The filter condition.
   */
  filterQuery?: GetStandardTemplateRequestFilterQuery;
  /**
   * @remarks
   * The standard template ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 22
   */
  id?: number;
  /**
   * @remarks
   * Specifies whether to allow a null value to be returned when the template does not exist. If set to false, an exception is thrown. Default value: true.
   */
  nullable?: boolean;
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

