// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStandardWordRootRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the word root.
   * 
   * This parameter is required.
   * 
   * @example
   * 平均值
   */
  name?: string;
  /**
   * @remarks
   * Specifies whether to allow a null value to be returned when the word root does not exist. If set to false, an exception is thrown. Default value: true.
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

