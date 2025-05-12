// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRepoTagScanTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The digest of the image.
   * 
   * @example
   * sha256:815386ebbe9a3490f38785ab11bda34ec8dacf4634af77b8912832d4f85dca04
   */
  digest?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-xkx6vujuhay0****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the image repository.
   * 
   * This parameter is required.
   * 
   * @example
   * crr-xwvi3osiy4ff****
   */
  repoId?: string;
  /**
   * @remarks
   * The type of the scanning engine.
   * 
   * *   `SAS_SCAN_SERVICE`: Security Center scan engine (paid service)
   * *   `ACR_SCAN_SERVICE`: Container Registry scan engine
   * 
   * @example
   * ACR_SCAN_SERVICE
   */
  scanService?: string;
  scanType?: string;
  /**
   * @remarks
   * The version of the image.
   * 
   * This parameter is required.
   * 
   * @example
   * 1.24
   */
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      digest: 'Digest',
      instanceId: 'InstanceId',
      repoId: 'RepoId',
      scanService: 'ScanService',
      scanType: 'ScanType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      digest: 'string',
      instanceId: 'string',
      repoId: 'string',
      scanService: 'string',
      scanType: 'string',
      tag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

