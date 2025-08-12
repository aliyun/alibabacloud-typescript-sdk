// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableMetricRuleBlackListRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the blacklist policies. Separate multiple IDs with commas (,). You can specify up to 50 IDs.
   * 
   * For information about how to obtain the ID of a blacklist policy, see [DescribeMetricRuleBlackList](https://help.aliyun.com/document_detail/457257.html).
   * 
   * > You can also set this parameter to a JSON array. Example: `["a9ad2ac2-3ed9-11ed-b878-0242ac12****","5cb8a9a4-198f-4651-a353-f8b28788****"]`.
   * 
   * This parameter is required.
   * 
   * @example
   * a9ad2ac2-3ed9-11ed-b878-0242ac12****
   */
  id?: string;
  /**
   * @remarks
   * Specifies whether to enable the blacklist policy. Valid values:
   * 
   * *   true: The blacklist policy is enabled.
   * *   false (default): The blacklist policy is disabled.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  isEnable?: boolean;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      isEnable: 'IsEnable',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      isEnable: 'boolean',
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

