// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CleanDistDataRequest extends $dara.Model {
  appId?: string;
  dataName?: string;
  dataVersion?: string;
  ensRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      dataName: 'DataName',
      dataVersion: 'DataVersion',
      ensRegionId: 'EnsRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      dataName: 'string',
      dataVersion: 'string',
      ensRegionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

