// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRepoTagScanResultRequest extends $dara.Model {
  /**
   * @remarks
   * The digest of the image.
   * 
   * @example
   * sha256:6b0b094f8a904f8fb6602427aed0d1fa
   */
  digest?: string;
  /**
   * @remarks
   * The parameter whose value that you want to query. Fox example, if the value is `FixCmd`, only the `FixCmd` parameter is returned.
   * 
   * @example
   * FixCmd
   */
  filterValue?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-2j88dtld8yel****
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
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
   * crr-uf082u9dg8do****
   */
  repoId?: string;
  /**
   * @remarks
   * The ID of the security scan task.
   * 
   * @example
   * 6b0b094f-8a90-4f8f-b660-2427aed0****
   */
  scanTaskId?: string;
  /**
   * @remarks
   * The type of the vulnerability. Valid values:
   * 
   * *   `cve`: image system vulnerability
   * *   `sca`: image application vulnerability
   * 
   * @example
   * sca
   */
  scanType?: string;
  /**
   * @remarks
   * The severity of the vulnerability. Valid values:
   * 
   * *   `High`
   * *   `Medium`
   * *   `Low`
   * *   `Unknown`
   * 
   * @example
   * High
   */
  severity?: string;
  /**
   * @remarks
   * The name of the image tag.
   * 
   * @example
   * 1
   */
  tag?: string;
  /**
   * @remarks
   * The keyword for fuzzy search used in scanning. The value can be a CVE name.
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

