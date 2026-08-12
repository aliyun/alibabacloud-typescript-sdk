// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AgenticFSVolumeConfig } from "./AgenticFsvolumeConfig";
import { OSSVolumeConfig } from "./OssvolumeConfig";


export class E2BVolume extends $dara.Model {
  agenticFSVolumeConfig?: AgenticFSVolumeConfig;
  createdAt?: string;
  ossVolumeConfig?: OSSVolumeConfig;
  resourceGroupID?: string;
  status?: string;
  statusReason?: string;
  storageClass?: string;
  teamID?: string;
  updatedAt?: string;
  userID?: string;
  volumeID?: string;
  volumeName?: string;
  static names(): { [key: string]: string } {
    return {
      agenticFSVolumeConfig: 'agenticFSVolumeConfig',
      createdAt: 'createdAt',
      ossVolumeConfig: 'ossVolumeConfig',
      resourceGroupID: 'resourceGroupID',
      status: 'status',
      statusReason: 'statusReason',
      storageClass: 'storageClass',
      teamID: 'teamID',
      updatedAt: 'updatedAt',
      userID: 'userID',
      volumeID: 'volumeID',
      volumeName: 'volumeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agenticFSVolumeConfig: AgenticFSVolumeConfig,
      createdAt: 'string',
      ossVolumeConfig: OSSVolumeConfig,
      resourceGroupID: 'string',
      status: 'string',
      statusReason: 'string',
      storageClass: 'string',
      teamID: 'string',
      updatedAt: 'string',
      userID: 'string',
      volumeID: 'string',
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

