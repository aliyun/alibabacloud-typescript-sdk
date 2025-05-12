// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRepoTagScanStatusRequest extends $dara.Model {
  /**
   * @example
   * 67bfbcc12b67936ec7f867927817cbb071832b873dbcaed312a1930ba5f1d529
   */
  digest?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cri-2j88dtld8yel****
   */
  instanceId?: string;
  /**
   * @example
   * crr-uf082u9dg8do****
   */
  repoId?: string;
  /**
   * @example
   * 838152F9-F725-5A52-A344-8972D65AC045
   */
  scanTaskId?: string;
  scanType?: string;
  /**
   * @example
   * 1
   */
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      digest: 'Digest',
      instanceId: 'InstanceId',
      repoId: 'RepoId',
      scanTaskId: 'ScanTaskId',
      scanType: 'ScanType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      digest: 'string',
      instanceId: 'string',
      repoId: 'string',
      scanTaskId: 'string',
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

