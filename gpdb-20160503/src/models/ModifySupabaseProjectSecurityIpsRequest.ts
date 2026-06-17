// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySupabaseProjectSecurityIpsRequest extends $dara.Model {
  /**
   * @remarks
   * The Supabase instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * sbp-407****
   */
  projectId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * > For more information, see [DescribeRegions](https://help.aliyun.com/document_detail/86912.html) to view available region IDs.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The list of IP addresses for the whitelist. Up to 1,000 IP addresses are supported. Separate multiple IP addresses with commas. The following formats are supported:
   * 
   * - 10.23.12.24 (IP address)
   * 
   * - 10.23.12.24/24 (A CIDR block, where `/24` indicates the prefix length. The prefix length must be an integer in the range `[1,32]`.)
   * 
   * This parameter is required.
   * 
   * @example
   * 127.0.0.1
   */
  securityIPList?: string;
  /**
   * @remarks
   * Specifies whether to modify the whitelist for database port 5432. The default value is true.
   */
  updateDb?: boolean;
  /**
   * @remarks
   * Specifies whether to modify the whitelist for HTTP port 80 and HTTPS port 443. The default value is true.
   */
  updateWeb?: boolean;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      regionId: 'RegionId',
      securityIPList: 'SecurityIPList',
      updateDb: 'UpdateDb',
      updateWeb: 'UpdateWeb',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      regionId: 'string',
      securityIPList: 'string',
      updateDb: 'boolean',
      updateWeb: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

