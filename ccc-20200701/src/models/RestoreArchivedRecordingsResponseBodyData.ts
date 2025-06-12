// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RestoreArchivedRecordingsResponseBodyData extends $dara.Model {
  /**
   * @example
   * job-25920271311543****
   */
  contactId?: string;
  /**
   * @example
   * False
   */
  exists?: string;
  /**
   * @example
   * Progressing
   */
  status?: string;
  /**
   * @example
   * Standard
   */
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      exists: 'Exists',
      status: 'Status',
      storageType: 'StorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'string',
      exists: 'string',
      status: 'string',
      storageType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

