// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySecurityIpsRequest extends $dara.Model {
  /**
   * @remarks
   * The attribute of the IP address whitelist. By default, this parameter is empty. A whitelist with the `hidden` attribute does not appear in the console.
   * 
   * @example
   * hidden
   */
  DBInstanceIPArrayAttribute?: string;
  /**
   * @remarks
   * The name of the whitelist. If you do not enter a name, IP addresses are added to the default whitelist.
   * 
   * >  You can create up to 50 whitelists for an instance.
   * 
   * @example
   * default
   */
  DBInstanceIPArrayName?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * >  You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the instance IDs of all AnalyticDB for PostgreSQL instances in a specific region.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-bp12ga6v69h86****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The method of modification. Valid values:
   * 
   * *   **Cover**: overwrites the whitelist.
   * *   **Append**: appends data to the whitelist.
   * *   **Delete**: deletes the whitelist.
   * 
   * @example
   * 0
   */
  modifyMode?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs. For more information about how to obtain the ID of a resource group, see [View basic information of a resource group](https://help.aliyun.com/document_detail/151181.html).
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The IP addresses listed in the whitelist. You can add up to 1,000 IP addresses to the whitelist. Separate multiple IP addresses with commas (,). The IP addresses must use one of the following formats:
   * 
   * *   0.0.0.0/0
   * *   10.23.12.24. This is a standard IP address.
   * *   10.23.12.24/24. This is a CIDR block. The value `/24` indicates that the prefix of the CIDR block is 24-bit long. You can replace 24 with a value in the range of `1 to 32`.
   * 
   * This parameter is required.
   * 
   * @example
   * ``10.10.**.**``
   */
  securityIPList?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceIPArrayAttribute: 'DBInstanceIPArrayAttribute',
      DBInstanceIPArrayName: 'DBInstanceIPArrayName',
      DBInstanceId: 'DBInstanceId',
      modifyMode: 'ModifyMode',
      resourceGroupId: 'ResourceGroupId',
      securityIPList: 'SecurityIPList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceIPArrayAttribute: 'string',
      DBInstanceIPArrayName: 'string',
      DBInstanceId: 'string',
      modifyMode: 'string',
      resourceGroupId: 'string',
      securityIPList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

