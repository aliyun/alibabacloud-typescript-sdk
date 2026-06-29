// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class ApplyDataFlowAutoRefreshRequestAutoRefreshs extends $dara.Model {
  /**
   * @remarks
   * The auto-refresh directory. CPFS automatically checks whether data in this directory on the source has been updated and imports the updated data.
   * 
   * Limits:
   * 
   * - The path must be 2 to 1,024 characters in length.
   * - The path must be encoded in UTF-8.
   * - The path must start and end with a forward slash (/).
   * 
   * > The directory must already exist in CPFS and must be in a fileset that has data flow enabled.
   * 
   * This parameter is required.
   * 
   * @example
   * /prefix1/prefix2/
   */
  refreshPath?: string;
  static names(): { [key: string]: string } {
    return {
      refreshPath: 'RefreshPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      refreshPath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyDataFlowAutoRefreshRequest extends $dara.Model {
  /**
   * @remarks
   * The auto-refresh interval. CPFS checks the directory for data updates at this interval. If data updates exist, an auto-refresh task is started. Unit: minutes.
   * 
   * Valid values: 10 to 525600. Default value: 10.
   * 
   * @example
   * 10
   */
  autoRefreshInterval?: number;
  /**
   * @remarks
   * The auto-refresh policy. This policy determines how data updates from the source are imported to CPFS. Valid values:
   * 
   * - None: Data updates from the source are not automatically imported to CPFS. You can use a data flow task to import data updates from the source.
   * - ImportChanged: Data updates from the source are automatically imported to CPFS.
   * 
   * @example
   * None
   */
  autoRefreshPolicy?: string;
  /**
   * @remarks
   * The collection of auto-refresh configurations.
   * 
   * This parameter is required.
   */
  autoRefreshs?: ApplyDataFlowAutoRefreshRequestAutoRefreshs[];
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but make sure that the token is unique among different requests.
   * 
   * The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * > If you do not specify this parameter, the system automatically uses the RequestId of the API request as the ClientToken. The RequestId may differ for each API request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the data flow.
   * 
   * This parameter is required.
   * 
   * @example
   * df-194433a5be31****
   */
  dataFlowId?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run for this request.
   * 
   * A dry run checks parameter validity and resource availability without actually creating an instance or incurring charges.
   * 
   * Valid values:
   * 
   * - true: Sends a dry run request without creating an instance. The check items include required parameters, request format, business limits, and NAS inventory. If the check fails, the corresponding error is returned. If the check succeeds, HTTP status code 200 is returned, but FileSystemId is empty.
   * - false (default): Sends a normal request. After the check succeeds, the instance is created.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * This parameter is required.
   * 
   * @example
   * cpfs-099394bd928c****
   */
  fileSystemId?: string;
  static names(): { [key: string]: string } {
    return {
      autoRefreshInterval: 'AutoRefreshInterval',
      autoRefreshPolicy: 'AutoRefreshPolicy',
      autoRefreshs: 'AutoRefreshs',
      clientToken: 'ClientToken',
      dataFlowId: 'DataFlowId',
      dryRun: 'DryRun',
      fileSystemId: 'FileSystemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRefreshInterval: 'number',
      autoRefreshPolicy: 'string',
      autoRefreshs: { 'type': 'array', 'itemType': ApplyDataFlowAutoRefreshRequestAutoRefreshs },
      clientToken: 'string',
      dataFlowId: 'string',
      dryRun: 'boolean',
      fileSystemId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.autoRefreshs)) {
      $dara.Model.validateArray(this.autoRefreshs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

