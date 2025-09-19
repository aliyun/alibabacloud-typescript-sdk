// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAgentlessSensitiveFileByKeyRequest extends $dara.Model {
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The UUID of the asset that is scanned. You can query the UUID on the Host or Cloud Product page. If you scan a host, set this parameter to the UUID of the scanned host. If you scan a snapshot or a custom image, set this parameter to the ID of the scanned snapshot or image.
   * 
   * @example
   * 06293273b67d19516cfcc712194f****
   */
  imageUuid?: string;
  /**
   * @remarks
   * The instance ID of the asset that is scanned. To query the instance ID, go to the Task Management page, click Details of a task, and then view the value of Check On.
   * 
   * @example
   * i-bp1fu4aqltf1huhc****
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 20. If you leave this parameter empty, 20 entries are returned on each page.
   * 
   * >  We recommend that you do not leave this parameter empty.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The name or IP address of the asset.
   * 
   * @example
   * 1.2.XX.XX
   */
  remark?: string;
  /**
   * @remarks
   * The types of the assets that are scanned.
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
   * The status of the baseline risk. Valid values:
   * 
   * *   **0**: unfixed.
   * *   **1**: fixed.
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

