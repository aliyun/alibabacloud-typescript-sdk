// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SyncMigrationJobRequest extends $dara.Model {
  jobType?: string;
  operationType?: string;
  regionId?: string;
  regions?: string;
  static names(): { [key: string]: string } {
    return {
      jobType: 'jobType',
      operationType: 'operationType',
      regionId: 'regionId',
      regions: 'regions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobType: 'string',
      operationType: 'string',
      regionId: 'string',
      regions: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

