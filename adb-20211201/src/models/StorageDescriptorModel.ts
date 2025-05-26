// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SerDeInfoModel } from "./SerDeInfoModel";


export class StorageDescriptorModel extends $dara.Model {
  compressed?: boolean;
  inputFormat?: string;
  location?: string;
  numBuckets?: number;
  outputFormat?: string;
  parameters?: { [key: string]: string };
  sdId?: number;
  serDeInfo?: SerDeInfoModel;
  storedAsSubDirectories?: boolean;
  static names(): { [key: string]: string } {
    return {
      compressed: 'Compressed',
      inputFormat: 'InputFormat',
      location: 'Location',
      numBuckets: 'NumBuckets',
      outputFormat: 'OutputFormat',
      parameters: 'Parameters',
      sdId: 'SdId',
      serDeInfo: 'SerDeInfo',
      storedAsSubDirectories: 'StoredAsSubDirectories',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compressed: 'boolean',
      inputFormat: 'string',
      location: 'string',
      numBuckets: 'number',
      outputFormat: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      sdId: 'number',
      serDeInfo: SerDeInfoModel,
      storedAsSubDirectories: 'boolean',
    };
  }

  validate() {
    if(this.parameters) {
      $dara.Model.validateMap(this.parameters);
    }
    if(this.serDeInfo && typeof (this.serDeInfo as any).validate === 'function') {
      (this.serDeInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

