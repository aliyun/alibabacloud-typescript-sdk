// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStandardTemplateShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The filter condition.
   */
  filterQueryShrink?: string;
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
      filterQueryShrink: 'FilterQuery',
      id: 'Id',
      nullable: 'Nullable',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterQueryShrink: 'string',
      id: 'number',
      nullable: 'boolean',
      opTenantId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

