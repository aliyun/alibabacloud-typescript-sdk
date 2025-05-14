// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateLiveRecordTemplateRequestRecordFormat } from "./CreateLiveRecordTemplateRequestRecordFormat";


export class CreateLiveRecordTemplateRequest extends $dara.Model {
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
  recordFormat?: CreateLiveRecordTemplateRequestRecordFormat[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      recordFormat: 'RecordFormat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      recordFormat: { 'type': 'array', 'itemType': CreateLiveRecordTemplateRequestRecordFormat },
    };
  }

  validate() {
    if(Array.isArray(this.recordFormat)) {
      $dara.Model.validateArray(this.recordFormat);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

