// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListScanBaselineByTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The image digest value.
   * 
   * @example
   * sha256:1c89806cfaf66d2990e2cf1131ebd56ff24b133745a33abf1228*************
   */
  digest?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * cri-***********
   */
  instanceId?: string;
  /**
   * @remarks
   * The level.
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
   * The page size.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The repository ID.
   * 
   * @example
   * crr-**************
   */
  repoId?: string;
  /**
   * @remarks
   * The image scan task ID.
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

