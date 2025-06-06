// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTasksShrinkRequest extends $dara.Model {
  labelSelectorShrink?: string;
  static names(): { [key: string]: string } {
    return {
      labelSelectorShrink: 'labelSelector',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelSelectorShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

