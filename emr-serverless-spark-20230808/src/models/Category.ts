// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Category extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  bizId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  creator?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  gmtCreated?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  gmtModified?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  modifier?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  parentBizId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'bizId',
      creator: 'creator',
      gmtCreated: 'gmtCreated',
      gmtModified: 'gmtModified',
      modifier: 'modifier',
      name: 'name',
      parentBizId: 'parentBizId',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      creator: 'number',
      gmtCreated: 'string',
      gmtModified: 'string',
      modifier: 'number',
      name: 'string',
      parentBizId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

