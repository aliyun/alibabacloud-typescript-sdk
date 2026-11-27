// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProtocolServiceRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can generate the token on your client and ensure that the token is unique across different requests.
   * 
   * The ClientToken can only contain ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * > If you do not specify this parameter, the system automatically uses the RequestId of the API request as the ClientToken. The RequestId may be different for each API request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the protocol service. It is displayed as the protocol service name in the console.
   * 
   * Limits:
   * 
   * - The description must be 2 to 128 characters in length.
   * - It must start with a letter or a Chinese character, and cannot start with `http://` or `https://`.
   * - It can contain digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * The description of the protocol service
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run on the creation request.
   * 
   * A dry run checks the validity of parameters and dependencies. It does not actually create the instance or incur any fees.
   * 
   * Valid values:
   * - true: performs a dry run. The protocol service is not created. The system checks whether required parameters are specified, the request format is valid, and business limits and dependencies are met. If the request fails the dry run, an error is returned. If the request passes the dry run, the HTTP status code 200 is returned, but the ProtocolServiceId is empty.
   * - false (default): performs a standard request. The instance is created directly after the request passes the check.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
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
   * Valid values: NFS (default). Only NFSv3 protocol access is supported.
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
   * Do not set this field when the storage redundancy type of the file system is zone-redundant storage (ZRS). In other cases, this field is required.
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
   * The VPC ID of the protocol service. It must be the same as the VPC of the file system.
   * 
   * Do not set this field when the storage redundancy type of the file system is zone-redundant storage (ZRS). In other cases, this field is required.
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

