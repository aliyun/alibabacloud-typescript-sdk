// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitLiveRecordJobShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the recording job.
   * 
   * This parameter is required.
   * 
   * @example
   * live stream record 1
   */
  name?: string;
  /**
   * @remarks
   * The callback URL.
   * 
   * @example
   * https://example.com/imsnotify
   */
  notifyUrl?: string;
  /**
   * @remarks
   * The storage address of the recording.
   * 
   * This parameter is required.
   */
  recordOutputShrink?: string;
  /**
   * @remarks
   * The URL of the live stream.
   * 
   * This parameter is required.
   */
  streamInputShrink?: string;
  /**
   * @remarks
   * The ID of the recording template.
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
      notifyUrl: 'NotifyUrl',
      recordOutputShrink: 'RecordOutput',
      streamInputShrink: 'StreamInput',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      notifyUrl: 'string',
      recordOutputShrink: 'string',
      streamInputShrink: 'string',
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

