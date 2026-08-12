// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVersionConfigRequestSdkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account of the resource folder member accounts.
   * >Invoke the [DescribeMonitorAccounts](~~DescribeMonitorAccounts~~) operation to obtain this parameter.
   * 
   * @example
   * 5815612291408486
   */
  resourceDirectoryAccountId?: number;
  /**
   * @remarks
   * The IP address of the access source.
   * 
   * @example
   * 2409:8a55:3827:cb50:5ad9:d5ff:fe87:f48c
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      resourceDirectoryAccountId: 'ResourceDirectoryAccountId',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceDirectoryAccountId: 'number',
      sourceIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVersionConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the region in which the instance resides.
   * 
   * @example
   * cn-guangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The Security Center SDK request.
   */
  sdkRequest?: DescribeVersionConfigRequestSdkRequest;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      sdkRequest: 'SdkRequest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      sdkRequest: DescribeVersionConfigRequestSdkRequest,
    };
  }

  validate() {
    if(this.sdkRequest && typeof (this.sdkRequest as any).validate === 'function') {
      (this.sdkRequest as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

