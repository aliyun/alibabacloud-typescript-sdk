// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateFlowTagRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * #1F9AEF
   */
  color?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 11
   */
  flowTagGroupId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      color: 'color',
      flowTagGroupId: 'flowTagGroupId',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      color: 'string',
      flowTagGroupId: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

