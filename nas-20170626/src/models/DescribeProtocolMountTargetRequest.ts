// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeProtocolMountTargetRequestFilters extends $dara.Model {
  /**
   * @remarks
   * The name of the filter key.
   * 
   * - ProtocolServiceIds: filters by protocol service ID.
   * 
   * - ExportIds: filters by export directory ID.
   * 
   * - VpcIds: filters by VPC ID.
   * 
   * - FsetIds: filters by fileset ID.
   * 
   * - Paths: filters by the file system path that corresponds to the mount target.
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
   * - If Key is set to ProtocolServiceIds, set Value to a protocol service ID. You can specify up to 10 protocol service IDs. Example: `ptc-12345678` or `ptc-12345678,ptc-12345679`.
   * 
   * - If Key is set to ExportIds, set Value to an export directory ID. You can specify up to 10 export directory IDs. Example: `exp-12345678` or `exp-12345678,exp-12345679`.
   * 
   * - If Key is set to VpcIds, set Value to the VPC ID of the protocol service. You can specify up to 10 VPC IDs. Example: `vpc-12345678` or `vpc-12345678,vpc-12345679`.
   * 
   * - If Key is set to FsetIds, set Value to a fileset ID. You can specify up to 10 fileset IDs. Example: `fset-12345678` or `fset-12345678,fset-12345679`.
   * 
   * - If Key is set to Paths, set Value to the file system directory that corresponds to the mount target. You can specify up to 10 paths. Example: `/cpfs/mnt_1/` or `/cpfs/mnt_1/,/cpfs/mnt_2/`.
   * 
   * - If Key is set to AccessGroupNames, set Value to the permission group name of the protocol service. You can specify up to 10 permission group names. Example: `ag-12345678` or `ag-12345678,ag-12345679`.
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
   * Ensures the idempotence of the request. Generate a unique parameter value from your client to ensure that the value is unique among different requests.
   * 
   * ClientToken supports only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * > If you do not specify this parameter, the system uses the RequestId of the API request as the ClientToken. The RequestId may vary for each API request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
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
  /**
   * @remarks
   * The filter keys for querying protocol service export directories.
   */
  filters?: DescribeProtocolMountTargetRequestFilters[];
  /**
   * @remarks
   * The maximum number of results to return per query.
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
   * The token used to initiate the next request when the response is truncated. You can use this token to retrieve the remaining results from where the truncation occurred.
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

