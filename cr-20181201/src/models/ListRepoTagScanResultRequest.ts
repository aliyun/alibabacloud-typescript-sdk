// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRepoTagScanResultRequest extends $dara.Model {
  /**
   * @remarks
   * The image digest.
   * 
   * @example
   * sha256:6b0b094f8a904f8fb6602427aed0d1fa
   */
  digest?: string;
  /**
   * @remarks
   * The query filter parameter. If the value is `FixCmd`, only the `FixCmd` result is returned, and other fields are not returned.
   * 
   * @example
   * FixCmd
   */
  filterValue?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-2j88dtld8yel****
   */
  instanceId?: string;
  /**
   * @remarks
   * The page number of the scan result list.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page in the scan result list.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The image repository ID.
   * 
   * @example
   * crr-uf082u9dg8do****
   */
  repoId?: string;
  /**
   * @remarks
   * The image scan task ID.
   * 
   * @example
   * 6b0b094f-8a90-4f8f-b660-2427aed0****
   */
  scanTaskId?: string;
  /**
   * @remarks
   * The vulnerability type. Valid values:
   * 
   * - `cve`: Image system vulnerability
   * - `sca`: Image application vulnerability
   * 
   * @example
   * sca
   */
  scanType?: string;
  /**
   * @remarks
   * The severity level of the scanned vulnerability. Valid values:
   * 
   * - `High`: High
   * 
   * - `Medium`: Medium
   * 
   * - `Low`: Low
   * 
   * - `Unknown`: Unknown
   * 
   * @example
   * High
   */
  severity?: string;
  /**
   * @remarks
   * The image version name.
   * 
   * @example
   * 1
   */
  tag?: string;
  /**
   * @remarks
   * The fuzzy search keyword for scanning. Fuzzy match by CVE name is supported.
   * 
   * @example
   * CVE-2021
   */
  vulQueryKey?: string;
  static names(): { [key: string]: string } {
    return {
      digest: 'Digest',
      filterValue: 'FilterValue',
      instanceId: 'InstanceId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      repoId: 'RepoId',
      scanTaskId: 'ScanTaskId',
      scanType: 'ScanType',
      severity: 'Severity',
      tag: 'Tag',
      vulQueryKey: 'VulQueryKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      digest: 'string',
      filterValue: 'string',
      instanceId: 'string',
      pageNo: 'number',
      pageSize: 'number',
      repoId: 'string',
      scanTaskId: 'string',
      scanType: 'string',
      severity: 'string',
      tag: 'string',
      vulQueryKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

