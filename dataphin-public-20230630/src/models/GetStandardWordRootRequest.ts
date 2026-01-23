// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStandardWordRootRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 平均值
   */
  name?: string;
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
      name: 'Name',
      nullable: 'Nullable',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
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

