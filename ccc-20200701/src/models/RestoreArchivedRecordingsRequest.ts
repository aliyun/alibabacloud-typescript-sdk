// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RestoreArchivedRecordingsRequest extends $dara.Model {
  /**
   * @example
   * [\\"job-216750038017142784\\"]
   */
  contactIds?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      contactIds: 'ContactIds',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactIds: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

