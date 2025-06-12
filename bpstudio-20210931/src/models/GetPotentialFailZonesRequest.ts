// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPotentialFailZonesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the value of this parameter is the ID of a disaster recovery set.
   * 
   * @example
   * true
   */
  isPlanId?: boolean;
  /**
   * @remarks
   * If you set IsPlanId to false, specify the ID of a disaster recovery application. If you set IsPlanId to true, specify the ID of a disaster recovery set.
   * 
   * @example
   * FS3ATPTOSC4SE1GG
   */
  objectId?: string;
  static names(): { [key: string]: string } {
    return {
      isPlanId: 'IsPlanId',
      objectId: 'ObjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isPlanId: 'boolean',
      objectId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

