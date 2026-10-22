// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyHostsPortRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the hosts whose O&M protocols and ports you want to modify. The value is a JSON string. You can enter up to 100 host IDs. Separate multiple host IDs with commas (,).
   * > You can call the [ListHosts](https://help.aliyun.com/document_detail/200665.html) operation to query the host IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * ["1","2","3"]
   */
  hostIds?: string;
  /**
   * @remarks
   * The ID of the Bastionhost instance where the hosts whose protocol ports you want to modify reside.
   * > You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-st220aw****
   */
  instanceId?: string;
  /**
   * @remarks
   * The new port number. The port number must be an integer. Valid values: 22 to 65535.
   * 
   * This parameter is required.
   * 
   * @example
   * 22
   */
  port?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 3
   */
  projectId?: number;
  /**
   * @remarks
   * The name of the protocol whose port you want to modify. Valid values:
   * - **SSH**
   * - **RDP**
   * 
   * This parameter is required.
   * 
   * @example
   * SSH
   */
  protocolName?: string;
  /**
   * @remarks
   * The region ID of the Bastionhost instance where the hosts whose ports you want to modify reside.
   * > For more information about the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      hostIds: 'HostIds',
      instanceId: 'InstanceId',
      port: 'Port',
      projectId: 'ProjectId',
      protocolName: 'ProtocolName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostIds: 'string',
      instanceId: 'string',
      port: 'string',
      projectId: 'number',
      protocolName: 'string',
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

