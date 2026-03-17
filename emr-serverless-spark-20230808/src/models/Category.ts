// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Category extends $dara.Model {
  /**
   * @remarks
   * The folder ID.
   * 
   * This parameter is required.
   * 
   * @example
   * w-d8********
   */
  bizId?: string;
  /**
   * @remarks
   * The ID of the user who creates the folder.
   * 
   * This parameter is required.
   * 
   * @example
   * 150978934701****
   */
  creator?: number;
  /**
   * @remarks
   * The time when the folder was created.
   * 
   * This parameter is required.
   * 
   * @example
   * 2025-03-10T02:02:41.000+00:00
   */
  gmtCreated?: string;
  /**
   * @remarks
   * The time when the folder was last updated.
   * 
   * This parameter is required.
   * 
   * @example
   * 2025-03-10T02:02:41.000+00:00
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the user who last modifies the folder.
   * 
   * This parameter is required.
   * 
   * @example
   * 150978934701****
   */
  modifier?: number;
  /**
   * @remarks
   * The name of the folder.
   * 
   * This parameter is required.
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * The parent folder ID.
   * 
   * @example
   * w-d6********
   */
  parentBizId?: string;
  /**
   * @remarks
   * The type of the folder.
   * 
   * This parameter is required.
   * 
   * @example
   * TASK
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

