// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetListenerHealthStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the listener on the NLB instance.
   * 
   * This parameter is required.
   * 
   * @example
   * lsn-bp1bpn0kn908w4nbw****@80
   */
  listenerId?: string;
  /**
   * @remarks
   * The ID of the region where the NLB instance is deployed.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/443657.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      listenerId: 'ListenerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

