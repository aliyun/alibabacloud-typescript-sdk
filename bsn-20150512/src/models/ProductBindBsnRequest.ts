// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ProductBindBsnRequest extends $dara.Model {
  /**
   * @remarks
   * 456*******163
   * 
   * This parameter is required.
   */
  aliuid?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4
   */
  num?: number;
  /**
   * @remarks
   * 41****34
   * 
   * This parameter is required.
   */
  resourceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  resourceType?: number;
  static names(): { [key: string]: string } {
    return {
      aliuid: 'aliuid',
      num: 'num',
      resourceId: 'resourceId',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliuid: 'number',
      num: 'number',
      resourceId: 'string',
      resourceType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

