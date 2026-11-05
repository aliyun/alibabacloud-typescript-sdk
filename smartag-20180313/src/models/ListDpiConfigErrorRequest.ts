// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDpiConfigErrorRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the instance for which the DPI feature is configured. Valid values:
   * 
   * - **acl**: an access control instance.
   * - **qos**: a QoS policy instance.
   * 
   * This parameter is required.
   * 
   * @example
   * qos
   */
  dpiConfigType?: string;
  /**
   * @remarks
   * The maximum number of entries allowed per page in a paged query.
   * 
   * Valid values: **1** to **100**.
   * 
   * Default value: **10**.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token used to start the next query.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID of the Smart Access Gateway instance.
   * You can invoke the [DescribeRegions](https://help.aliyun.com/document_detail/69813.html) operation to query the regions supported by Smart Access Gateway and the corresponding region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The instance ID for which the DPI feature is configured.
   * 
   * @example
   * qos-1strcafl4wghpb****
   */
  ruleInstanceId?: string;
  /**
   * @remarks
   * The instance ID of the Smart Access Gateway.
   * 
   * @example
   * sag-1e8sgws6b133b8****
   */
  smartAGId?: string;
  static names(): { [key: string]: string } {
    return {
      dpiConfigType: 'DpiConfigType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      ruleInstanceId: 'RuleInstanceId',
      smartAGId: 'SmartAGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dpiConfigType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      ruleInstanceId: 'string',
      smartAGId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

