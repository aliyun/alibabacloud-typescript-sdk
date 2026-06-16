// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDocParserJobStatusRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  jobId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

