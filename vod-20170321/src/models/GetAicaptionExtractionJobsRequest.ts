// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAICaptionExtractionJobsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  jobIds?: string;
  static names(): { [key: string]: string } {
    return {
      jobIds: 'JobIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

