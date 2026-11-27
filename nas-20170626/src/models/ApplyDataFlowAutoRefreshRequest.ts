// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class ApplyDataFlowAutoRefreshRequestAutoRefreshs extends $dara.Model {
  /**
   * @remarks
   * The auto-refresh directory. CPFS automatically checks only whether source data in this directory is updated and automatically imports the updated data.
   * 
   * Limits:
   * 
   * - The value must be 2 to 1024 characters in length.
   * - The value must be encoded in UTF-8.
   * - The value must start and end with a forward slash (/).
   * 
   * > The directory must be an existing directory on CPFS and must be located in a Fileset for which data flow is enabled.
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
   * The auto-refresh interval. At each interval, CPFS checks whether data in the directory is updated. If data updates exist, CPFS starts an auto-refresh task. Unit: minutes.
   * 
   * Valid values: 10 to 525600. Default value: 10.
   * 
   * @example
   * 10
   */
  autoRefreshInterval?: number;
  /**
   * @remarks
   * The auto-refresh policy. This policy specifies how data updates in the source are imported into CPFS after the source data is updated. Valid values:
   * 
   * - None: Data updates in the source are not automatically imported into CPFS. You can use a data flow task to import data updates from the source.
   * - ImportChanged: Data updates in the source are automatically imported into CPFS.
   * 
   * @example
   * None
   */
  autoRefreshPolicy?: string;
  /**
   * @remarks
   * The auto-refresh configurations.
   * 
   * This parameter is required.
   */
  autoRefreshs?: ApplyDataFlowAutoRefreshRequestAutoRefreshs[];
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can generate a value from your client to ensure that the value is unique among different requests.
   * 
   * The ClientToken parameter supports only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * > If you do not specify this parameter, the system automatically uses the RequestId of the API request as the ClientToken. The RequestId may be different for each API request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The data flow ID.
   * 
   * This parameter is required.
   * 
   * @example
   * df-194433a5be31****
   */
  dataFlowId?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run on this creation request.
   * 
   * A dry run checks parameter validity and inventory. It does not actually create an instance or incur fees.
   * 
   * Valid values:
   * 
   * - true: Sends a check request and does not create an instance. Check items include whether required parameters are specified, the request format, service limits, and NAS inventory. If the check fails, the system returns the corresponding error. If the check succeeds, the system returns HTTP status code 200, but FileSystemId is empty.
   * - false (default): Sends a normal request. After the check succeeds, the system creates the instance.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The file system ID.
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

