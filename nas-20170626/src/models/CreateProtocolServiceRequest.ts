// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProtocolServiceRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but make sure that the token is unique among different requests.
   * 
   * The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * > If you do not specify this parameter, the system automatically uses the RequestId of the API request as the ClientToken. The RequestId may differ for each API request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the protocol service. This value is displayed as "Protocol service name" in the console.
   * 
   * Limits:
   * 
   * - The description must be 2 to 128 characters in length.
   * - The description must start with a letter or Chinese character and cannot start with `http://` or `https://`.
   * - The description can contain digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * 此协议服务的描述。
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run for this request.
   * 
   * A dry run checks parameter validity and dependencies without actually creating the instance or incurring charges.
   * 
   * Valid values:
   * - true: Sends a check request without creating the protocol service. The check items include whether required parameters are specified, the request format, and business limit dependencies. If the check fails, the corresponding error is returned. If the check passes, HTTP status code 200 is returned, but ProtocolServiceId is empty.
   * - false (default): Sends a normal request. After the check passes, the instance is directly created.
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
  /**
   * @remarks
   * The specification of the protocol service.
   * 
   * Valid values: General (default).
   * 
   * This parameter is required.
   * 
   * @example
   * General
   */
  protocolSpec?: string;
  /**
   * @remarks
   * The protocol type of the protocol service.
   * 
   * Valid values: NFS (default). Only NFSv3 access is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * NFS
   */
  protocolType?: string;
  /**
   * @remarks
   * The bandwidth of the protocol service.
   * 
   * Unit: MB/s.
   * 
   * @example
   * 8000
   */
  throughput?: number;
  /**
   * @remarks
   * The vSwitch ID of the protocol service.
   * 
   * If the storage redundancy type of the file system is zone-redundant storage (ZRS), do not set this parameter. Otherwise, this parameter is required.
   * 
   * @example
   * vsw-2vc3c2lybvdllxyq4****
   * 
   * **if can be null:**
   * true
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The VPC ID of the protocol service. The VPC must be the same as the VPC of the file system.
   * 
   * If the storage redundancy type of the file system is zone-redundant storage (ZRS), do not set this parameter. Otherwise, this parameter is required.
   * 
   * @example
   * vpc-2vct297b8157bth9z****
   * 
   * **if can be null:**
   * true
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      dryRun: 'DryRun',
      fileSystemId: 'FileSystemId',
      protocolSpec: 'ProtocolSpec',
      protocolType: 'ProtocolType',
      throughput: 'Throughput',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      dryRun: 'boolean',
      fileSystemId: 'string',
      protocolSpec: 'string',
      protocolType: 'string',
      throughput: 'number',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

