// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLabelRequest extends $dara.Model {
  labelContent?: string;
  labelId?: string;
  static names(): { [key: string]: string } {
    return {
      labelContent: 'LabelContent',
      labelId: 'LabelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelContent: 'string',
      labelId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

