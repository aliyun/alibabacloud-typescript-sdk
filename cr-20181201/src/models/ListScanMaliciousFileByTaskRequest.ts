// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListScanMaliciousFileByTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The digest of the image.
   * 
   * @example
   * sha256:aa4bffff6406785e930dab1f94c9a1297ba22xxxx71d71504a015764*********
   */
  digest?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * cri-gu94qynvpwk*****
   */
  instanceId?: string;
  /**
   * @remarks
   * The severity level of the malicious file.
   * 
   * @example
   * serious、suspicious、remind
   */
  level?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Maximum value: 100. If the value that you specify exceeds 100, the system returns a parameter error or uses 100 as the maximum number of entries to return.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the image repository.
   * 
   * @example
   * crr-h1y4l279wb8*****
   */
  repoId?: string;
  /**
   * @remarks
   * The ID of the image scan task.
   * 
   * @example
   * 79ee6bc2-3288-4c56-b967-**********
   */
  scanTaskId?: string;
  /**
   * @remarks
   * The image version.
   * 
   * @example
   * V6.11
   */
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      digest: 'Digest',
      instanceId: 'InstanceId',
      level: 'Level',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      repoId: 'RepoId',
      scanTaskId: 'ScanTaskId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      digest: 'string',
      instanceId: 'string',
      level: 'string',
      pageNo: 'number',
      pageSize: 'number',
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

