// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLiveRecordTemplateShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the template.
   * 
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * The list of recording formats.
   * 
   * This parameter is required.
   */
  recordFormatShrink?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      recordFormatShrink: 'RecordFormat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      recordFormatShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

