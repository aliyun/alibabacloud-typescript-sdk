// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateLiveRecordTemplateRequestRecordFormat } from "./UpdateLiveRecordTemplateRequestRecordFormat";


export class UpdateLiveRecordTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The template name.
   * 
   * This parameter is required.
   * 
   * @example
   * test template
   */
  name?: string;
  /**
   * @remarks
   * The list of recording formats.
   * 
   * This parameter is required.
   */
  recordFormat?: UpdateLiveRecordTemplateRequestRecordFormat[];
  /**
   * @remarks
   * The template ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 69e1f9fe-1e97-11ed-ba64-0c42a1b73d66
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      recordFormat: 'RecordFormat',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      recordFormat: { 'type': 'array', 'itemType': UpdateLiveRecordTemplateRequestRecordFormat },
      templateId: 'string',
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

