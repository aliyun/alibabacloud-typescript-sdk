// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSmartAccessGatewayDnsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to query only the SAG instances that belong to another Alibaba Cloud account. Valid values:
   * 
   * *   **false** (default)
   * *   **true**
   * 
   * @example
   * false
   */
  crossAccount?: boolean;
  /**
   * @remarks
   * The IP address of the primary DNS server.
   * 
   * @example
   * 10.10.XX.XX
   */
  masterDns?: string;
  /**
   * @remarks
   * The region ID of the SAG instance.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/69813.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the SAG instance belongs.
   * 
   * @example
   * 147304382796****
   */
  resourceUid?: string;
  /**
   * @remarks
   * The ID of the Smart Access Gateway (SAG) instance.
   * 
   * This parameter is required.
   * 
   * @example
   * sag-3manef62evrfr6****
   */
  sagInsId?: string;
  /**
   * @remarks
   * The serial number of the SAG device.
   * 
   * This parameter is required.
   * 
   * @example
   * sagf4ea****
   */
  sagSn?: string;
  /**
   * @remarks
   * The IP address of the secondary DNS server.
   * 
   * @example
   * 10.10.XX.XX
   */
  slaveDns?: string;
  static names(): { [key: string]: string } {
    return {
      crossAccount: 'CrossAccount',
      masterDns: 'MasterDns',
      regionId: 'RegionId',
      resourceUid: 'ResourceUid',
      sagInsId: 'SagInsId',
      sagSn: 'SagSn',
      slaveDns: 'SlaveDns',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crossAccount: 'boolean',
      masterDns: 'string',
      regionId: 'string',
      resourceUid: 'string',
      sagInsId: 'string',
      sagSn: 'string',
      slaveDns: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

