// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetachLabelRequest extends $dara.Model {
  labelContent?: string;
  labelId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  serialNo?: string;
  static names(): { [key: string]: string } {
    return {
      labelContent: 'LabelContent',
      labelId: 'LabelId',
      serialNo: 'SerialNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelContent: 'string',
      labelId: 'string',
      serialNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

