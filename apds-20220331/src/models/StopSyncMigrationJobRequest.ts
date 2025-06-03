// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopSyncMigrationJobRequest extends $dara.Model {
  jobType?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      jobType: 'jobType',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobType: 'string',
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

