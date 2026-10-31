// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStandardTemplateShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The filter conditions.
   */
  filterQueryShrink?: string;
  /**
   * @remarks
   * The ID of the standard template.
   * 
   * This parameter is required.
   * 
   * @example
   * 22
   */
  id?: number;
  /**
   * @remarks
   * Specifies whether to allow a null value to be returned when the template does not exist. If this parameter is set to false, an exception is thrown. Default value: true.
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
  /**
   * @remarks
   * The ID of the operator.
   * 
   * @example
   * 30001011
   */
  opUserId?: string;
  static names(): { [key: string]: string } {
    return {
      filterQueryShrink: 'FilterQuery',
      id: 'Id',
      nullable: 'Nullable',
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterQueryShrink: 'string',
      id: 'number',
      nullable: 'boolean',
      opTenantId: 'number',
      opUserId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

