// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeForwardEntryAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * fwd-5tfi6f0rutmd00xrhkag7****
   */
  forwardEntryId?: string;
  static names(): { [key: string]: string } {
    return {
      forwardEntryId: 'ForwardEntryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forwardEntryId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

