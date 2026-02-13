// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AISearchResourceDeleteRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * WzMGQZwB7nQEs3Qk3ajH
   */
  resourceId?: string;
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
      resourceId: 'resourceId',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
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

