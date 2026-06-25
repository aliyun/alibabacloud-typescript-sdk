// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteServiceLabelShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The keys of the service labels that you want to delete. This parameter is deprecated. Use the LabelKeys parameter instead.
   * 
   * @deprecated
   */
  keysShrink?: string;
  /**
   * @remarks
   * The keys of the service labels that you want to delete.
   */
  labelKeysShrink?: string;
  static names(): { [key: string]: string } {
    return {
      keysShrink: 'Keys',
      labelKeysShrink: 'LabelKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keysShrink: 'string',
      labelKeysShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

