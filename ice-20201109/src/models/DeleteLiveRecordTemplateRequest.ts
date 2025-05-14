// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteLiveRecordTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the template to be deleted. To obtain the template ID, log on to the [Intelligent Media Services (IMS) console](https://ice.console.aliyun.com/live-processing/template/list/record), choose Real-time Media Processing > Template Management, and then click the Recording tab. Alternatively, find the ID from the response parameters of the [CreateLiveRecordTemplate](https://help.aliyun.com/document_detail/448213.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 69e1f9fe-1e97-11ed-ba64-0c42a1b73d66
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

