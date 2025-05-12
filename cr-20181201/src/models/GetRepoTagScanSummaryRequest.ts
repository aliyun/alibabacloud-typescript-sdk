// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRepoTagScanSummaryRequest extends $dara.Model {
  /**
   * @remarks
   * The number of unknown-severity vulnerabilities.
   * 
   * @example
   * sha256:c9f370a4eb1c00d0b0d7212a0a9fa4a7697756c90f0f680afaf9737a25725f4c
   */
  digest?: string;
  /**
   * @remarks
   * The ID of the image repository.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-2j88dtld8yel****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the image tag.
   * 
   * @example
   * crr-c2i5yk6h6pu9d5o8
   */
  repoId?: string;
  /**
   * @remarks
   * The digest of the image.
   * 
   * @example
   * 47A3E5A3-6AD4-5F02-93B8-59F778AE25D4
   */
  scanTaskId?: string;
  /**
   * @remarks
   * The ID of the security scan task.
   * 
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
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      digest: 'string',
      instanceId: 'string',
      repoId: 'string',
      scanTaskId: 'string',
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

