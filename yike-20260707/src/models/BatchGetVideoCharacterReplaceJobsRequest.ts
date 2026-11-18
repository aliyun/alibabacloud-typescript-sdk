// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchGetVideoCharacterReplaceJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The list of job IDs. Separate multiple IDs with commas.
   * 
   * @example
   * ag_83baeea38b534ee1937b8a4acd08****,ag_f7eeed5d5e294dfba4bb347177e1****
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

