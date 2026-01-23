// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStandardTemplateShrinkRequest extends $dara.Model {
  filterQueryShrink?: string;
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

