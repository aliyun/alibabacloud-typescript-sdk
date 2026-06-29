// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccessPointsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * Limits:
   * 
   * - Valid values of N: 1 to 20.
   * - The tag key can be up to 128 characters in length.
   * - The tag key cannot start with aliyun or acs:.
   * - The tag key cannot contain http:// or https://.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * Limits:
   * 
   * - Valid values of N: 1 to 20.
   * - The tag value can be up to 128 characters in length.
   * - The tag value cannot start with aliyun or acs:.
   * - The tag value cannot contain http:// or https://.
   * 
   * @example
   * TestValue
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

export class DescribeAccessPointsRequest extends $dara.Model {
  /**
   * @remarks
   * The permission group name.
   * 
   * This parameter is required if the file system is a General-purpose NAS file system.
   * 
   * Default permission group: DEFAULT_VPC_GROUP_NAME (the default VPC permission group).
   * 
   * @example
   * DEFAULT_VPC_GROUP_NAME
   */
  accessGroup?: string;
  /**
   * @remarks
   * The file system ID.
   * 
   * @example
   * 174494****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The number of results for each query.
   * 
   * Valid values: 10 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The query token. Set the value to the NextToken value returned in the previous API call.
   * 
   * @example
   * MTY4NzcxOTcwMjAzMDk2Nzc0MyM4MDM4****
   */
  nextToken?: string;
  /**
   * @remarks
   * The list of access point tags.
   */
  tag?: DescribeAccessPointsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      accessGroup: 'AccessGroup',
      fileSystemId: 'FileSystemId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessGroup: 'string',
      fileSystemId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      tag: { 'type': 'array', 'itemType': DescribeAccessPointsRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

