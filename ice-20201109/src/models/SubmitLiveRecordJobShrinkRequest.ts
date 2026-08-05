// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitLiveRecordJobShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the recording task.
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
   * The recording storage address.
   * 
   * This parameter is required.
   */
  recordOutputShrink?: string;
  /**
   * @remarks
   * The live stream address.
   * 
   * This parameter is required.
   */
  streamInputShrink?: string;
  /**
   * @remarks
   * The recording template ID.
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

