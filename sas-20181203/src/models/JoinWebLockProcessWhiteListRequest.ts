// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class JoinWebLockProcessWhiteListRequest extends $dara.Model {
  /**
   * @remarks
   * The paths of the processes.
   */
  processPaths?: string[];
  /**
   * @remarks
   * The UUIDs of the servers on which the processes run. Separate multiple UUIDs with commas (,).
   * 
   * @example
   * 0c1714dc-f7a3-4265-8364-7aa3fce8****,1cc45e7d-7698-4b2c-89d8-e8cba407****
   */
  uuids?: string;
  static names(): { [key: string]: string } {
    return {
      processPaths: 'ProcessPaths',
      uuids: 'Uuids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      processPaths: { 'type': 'array', 'itemType': 'string' },
      uuids: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.processPaths)) {
      $dara.Model.validateArray(this.processPaths);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

