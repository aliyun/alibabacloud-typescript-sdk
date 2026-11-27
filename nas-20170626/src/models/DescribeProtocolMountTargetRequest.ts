// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeProtocolMountTargetRequestFilters extends $dara.Model {
  /**
   * @remarks
   * The name of the filter key. Valid values:
   * 
   * - ProtocolServiceIds: filters by protocol service ID.
   * 
   * - ExportIds: filters by export directory ID.
   * 
   * - VpcIds: filters by VPC ID.
   * 
   * - FsetIds: filters by Fileset ID.
   * 
   * - Paths: filters by the file system path corresponding to the mount target.
   * 
   * - AccessGroupNames: filters by permission group name.
   * 
   * @example
   * ExportIds
   */
  key?: string;
  /**
   * @remarks
   * The value of the filter key. Wildcards are not supported.
   * 
   * - If Key is set to ProtocolServiceIds, set Value to the protocol service IDs. You can specify up to 10 protocol service IDs. Example: `ptc-12345678` or `ptc-12345678,ptc-12345679`.
   * 
   * - If Key is set to ExportIds, set Value to the export directory IDs. You can specify up to 10 export directory IDs. Example: `exp-12345678` or `exp-12345678,exp-12345679`.
   * 
   * - If Key is set to VpcIds, set Value to the VPC IDs of the protocol service. You can specify up to 10 VPC IDs. Example: `vpc-12345678` or `vpc-12345678,vpc-12345679`.
   * 
   * - If Key is set to FsetIds, set Value to the Fileset IDs. You can specify up to 10 Fileset IDs. Example: `fset-12345678` or `fset-12345678,fset-12345679`.
   * 
   * - If Key is set to Paths, set Value to the file system directories corresponding to the mount targets. You can specify up to 10 paths. Example: `/cpfs/mnt_1/` or `/cpfs/mnt_1/,/cpfs/mnt_2/`.
   * 
   * - If Key is set to AccessGroupNames, set Value to the permission group names of the protocol service. You can specify up to 10 permission group names. Example: `ag-12345678` or `ag-12345678,ag-12345679`.
   * 
   * @example
   * exp-19abf5beab8d****, exp-19acf6beaf7d****
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProtocolMountTargetRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, and make sure that the token is unique across different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * > If you do not specify this parameter, the system automatically uses the RequestId of the API request as the ClientToken. The RequestId of each API request may be different.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
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
  /**
   * @remarks
   * The filter keys used to query the export directories of the protocol service.
   */
  filters?: DescribeProtocolMountTargetRequestFilters[];
  /**
   * @remarks
   * The maximum number of entries to return for a single request.
   * 
   *  - Valid values: 10 to 100.
   * 
   * 
   * - Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results when the returned results are truncated.
   * 
   * @example
   * aBcdg==
   */
  nextToken?: string;
  /**
   * @remarks
   * The list of protocol service IDs.
   * 
   * @example
   * ptc-123xxx
   */
  protocolServiceIds?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      fileSystemId: 'FileSystemId',
      filters: 'Filters',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      protocolServiceIds: 'ProtocolServiceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      fileSystemId: 'string',
      filters: { 'type': 'array', 'itemType': DescribeProtocolMountTargetRequestFilters },
      maxResults: 'number',
      nextToken: 'string',
      protocolServiceIds: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.filters)) {
      $dara.Model.validateArray(this.filters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

