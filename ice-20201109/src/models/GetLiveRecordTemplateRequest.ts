// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLiveRecordTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the recording job. You can specify the JobId parameter to retrieve the snapshot of the template used by the job.
   * 
   * @example
   * ab0e3e76-1e9d-11ed-ba64-0c42a1b73d66
   */
  jobId?: string;
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
      jobId: 'JobId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
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

