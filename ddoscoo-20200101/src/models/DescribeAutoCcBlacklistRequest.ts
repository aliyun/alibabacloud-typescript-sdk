// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAutoCcBlacklistRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * > You can call the [DescribeInstanceIds](https://help.aliyun.com/document_detail/157459.html) operation to query the IDs of all instances.
   * 
   * This parameter is required.
   * 
   * @example
   * ddoscoo-cn-mp91j1ao****
   */
  instanceId?: string;
  /**
   * @remarks
   * The keyword for the query. This keyword is used to specify the prefix of the source IP address that you want to query.
   * 
   * > The keyword must be greater than three characters in length.
   * 
   * @example
   * 138
   */
  keyWord?: string;
  /**
   * @remarks
   * The number of the page to return. For example, to query the returned results on the first page, set the value to **1**.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  queryType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      keyWord: 'KeyWord',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      queryType: 'QueryType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      keyWord: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      queryType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

