// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteResourceShareRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the resource share.
   * 
   * This parameter is required.
   * 
   * @example
   * rs-qSkW1HBY****
   */
  resourceShareId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceShareId: 'ResourceShareId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceShareId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

