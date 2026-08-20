// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeProjectMessagesRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the Alibaba Cloud Marketplace business instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 4****89
   */
  instanceId?: string;
  /**
   * @remarks
   * The page number of the query. Each page contains 20 entries.
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageIndex: 'PageIndex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageIndex: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

