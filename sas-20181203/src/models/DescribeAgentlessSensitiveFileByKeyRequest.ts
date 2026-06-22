// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAgentlessSensitiveFileByKeyRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the page to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The UUID of the asset to scan. You can obtain this value from the Host Assets and Cloud Products page. In host security detection scenarios, this parameter specifies the UUID of the host to scan. In snapshot security detection and custom image security detection scenarios, this parameter specifies the ID of the image or snapshot to scan.
   * 
   * @example
   * 06293273b67d19516cfcc712194f****
   */
  imageUuid?: string;
  /**
   * @remarks
   * The instance ID of the asset to query. You can obtain this value from Node Management > Details > Detection Objects.
   * 
   * @example
   * i-bp1fu4aqltf1huhc****
   */
  instanceId?: string;
  /**
   * @remarks
   * The maximum number of entries per page in a paging query. Default value: 20. If you leave this parameter empty, 20 entries are returned per page.
   * > Do not leave PageSize empty.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The asset name or IP address.
   * 
   * @example
   * 1.2.XX.XX
   */
  remark?: string;
  /**
   * @remarks
   * The collection of scan ranges.
   */
  scanRange?: string[];
  /**
   * @remarks
   * The type of the sensitive file.
   * 
   * @example
   * sshpasswd
   */
  sensitiveFileKey?: string;
  /**
   * @remarks
   * The fix status of the baseline risk. Valid values:
   * - **0**: unfixed
   * - **1**: fixed.
   * 
   * @example
   * 0
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      imageUuid: 'ImageUuid',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      remark: 'Remark',
      scanRange: 'ScanRange',
      sensitiveFileKey: 'SensitiveFileKey',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      imageUuid: 'string',
      instanceId: 'string',
      pageSize: 'number',
      remark: 'string',
      scanRange: { 'type': 'array', 'itemType': 'string' },
      sensitiveFileKey: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.scanRange)) {
      $dara.Model.validateArray(this.scanRange);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

