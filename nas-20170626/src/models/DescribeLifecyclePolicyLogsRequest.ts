// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLifecyclePolicyLogsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * bmcpfs-030wldnqm8evtpy****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * lc-xxx
   */
  lifecyclePolicyId?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      lifecyclePolicyId: 'LifecyclePolicyId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      lifecyclePolicyId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

