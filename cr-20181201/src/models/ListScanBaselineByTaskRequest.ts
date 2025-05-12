// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListScanBaselineByTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The digest value of the image.
   * 
   * @example
   * sha256:1c89806cfaf66d2990e2cf1131ebd56ff24b133745a33abf1228*************
   */
  digest?: string;
  /**
   * @remarks
   * The ID of the Container Registry instance.
   * 
   * @example
   * cri-***********
   */
  instanceId?: string;
  /**
   * @remarks
   * The level of the baseline risk.
   * 
   * @example
   * High
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
   * The number of entries per page.
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
   * crr-**************
   */
  repoId?: string;
  /**
   * @remarks
   * The ID of the image scan task.
   * 
   * @example
   * 3e526d7e-4b45-4703-b046-***********
   */
  scanTaskId?: string;
  /**
   * @remarks
   * The image version.
   * 
   * @example
   * 1.1.36
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

