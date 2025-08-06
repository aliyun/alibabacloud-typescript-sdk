// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateStreamInfoRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  jobId?: string;
  /**
   * @remarks
   * This parameter is required.
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

