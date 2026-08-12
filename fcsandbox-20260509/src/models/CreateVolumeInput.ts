// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AgenticFSVolumeConfig } from "./AgenticFsvolumeConfig";
import { OSSVolumeConfig } from "./OssvolumeConfig";


export class CreateVolumeInput extends $dara.Model {
  agenticFSVolumeConfig?: AgenticFSVolumeConfig;
  ossVolumeConfig?: OSSVolumeConfig;
  teamID?: string;
  volumeName?: string;
  static names(): { [key: string]: string } {
    return {
      agenticFSVolumeConfig: 'agenticFSVolumeConfig',
      ossVolumeConfig: 'ossVolumeConfig',
      teamID: 'teamID',
      volumeName: 'volumeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agenticFSVolumeConfig: AgenticFSVolumeConfig,
      ossVolumeConfig: OSSVolumeConfig,
      teamID: 'string',
      volumeName: 'string',
    };
  }

  validate() {
    if(this.agenticFSVolumeConfig && typeof (this.agenticFSVolumeConfig as any).validate === 'function') {
      (this.agenticFSVolumeConfig as any).validate();
    }
    if(this.ossVolumeConfig && typeof (this.ossVolumeConfig as any).validate === 'function') {
      (this.ossVolumeConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

