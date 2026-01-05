// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTagOptionRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the tag option.
   * 
   * This parameter is required.
   * 
   * @example
   * tag-bp1r3mxq3t****
   */
  tagOptionId?: string;
  static names(): { [key: string]: string } {
    return {
      tagOptionId: 'TagOptionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagOptionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

