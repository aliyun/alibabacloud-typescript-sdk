// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitLiveSnapshotJobShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The snapshot callback URL.
   * 
   * *   It cannot exceed 255 characters in length.
   * *   Both HTTP and HTTPS URLs are supported.
   * 
   * @example
   * http://www.aliyun.com/snapshot/callback
   */
  callbackUrl?: string;
  /**
   * @remarks
   * The name of the job.
   * 
   * *   It cannot exceed 128 characters in length.
   * 
   * This parameter is required.
   */
  jobName?: string;
  /**
   * @remarks
   * The information about the output snapshot.
   * 
   * This parameter is required.
   */
  snapshotOutputShrink?: string;
  /**
   * @remarks
   * The information about the input stream.
   * 
   * This parameter is required.
   */
  streamInputShrink?: string;
  /**
   * @remarks
   * The template ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ****a046-263c-3560-978a-fb287782****
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      callbackUrl: 'CallbackUrl',
      jobName: 'JobName',
      snapshotOutputShrink: 'SnapshotOutput',
      streamInputShrink: 'StreamInput',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callbackUrl: 'string',
      jobName: 'string',
      snapshotOutputShrink: 'string',
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

