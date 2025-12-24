// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteGatewayLabelShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  labelKeysShrink?: string;
  static names(): { [key: string]: string } {
    return {
      labelKeysShrink: 'LabelKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

