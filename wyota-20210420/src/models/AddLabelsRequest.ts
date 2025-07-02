// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddLabelsRequest extends $dara.Model {
  labelContents?: string;
  static names(): { [key: string]: string } {
    return {
      labelContents: 'LabelContents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelContents: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

