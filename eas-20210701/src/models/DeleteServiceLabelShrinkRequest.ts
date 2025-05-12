// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteServiceLabelShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The service tags that you want to delete.
   * 
   * This parameter is required.
   */
  keysShrink?: string;
  static names(): { [key: string]: string } {
    return {
      keysShrink: 'Keys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keysShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

