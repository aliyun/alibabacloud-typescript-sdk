// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesTrafficPackagesRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the simple application servers. The value can be a JSON array that consists of up to 100 simple application server IDs. Separate multiple server IDs with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * ["2ad1ae67295445f598017499dc******","2ad1ae67295445f598017499dc******"]
   */
  instanceIds?: string;
  /**
   * @remarks
   * The region ID of the simple application servers. You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: 'string',
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

