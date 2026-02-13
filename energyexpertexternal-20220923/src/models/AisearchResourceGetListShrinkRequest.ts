// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AISearchResourceGetListShrinkRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  resourceIdsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * miniapp
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'currentPage',
      pageSize: 'pageSize',
      resourceIdsShrink: 'resourceIds',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      resourceIdsShrink: 'string',
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

