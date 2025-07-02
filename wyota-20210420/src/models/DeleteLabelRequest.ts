// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteLabelRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  force?: string;
  labelContent?: string;
  labelId?: string;
  static names(): { [key: string]: string } {
    return {
      force: 'Force',
      labelContent: 'LabelContent',
      labelId: 'LabelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      force: 'string',
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

