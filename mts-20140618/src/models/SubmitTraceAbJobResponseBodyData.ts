// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitTraceAbJobResponseBodyData extends $dara.Model {
  /**
   * @example
   * bfb786c639894f4d80648792021e****
   */
  jobId?: string;
  /**
   * @example
   * 437bd2b516ffda105d07b12a9a82****
   */
  mediaId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      mediaId: 'MediaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      mediaId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

