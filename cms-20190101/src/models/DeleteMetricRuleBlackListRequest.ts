// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMetricRuleBlackListRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the alert blacklist policy. Separate multiple IDs with commas (,). You can specify up to 50 IDs.
   * 
   * For information about how to obtain the ID of an alert blacklist policy, see [DescribeMetricRuleBlackList](https://help.aliyun.com/document_detail/457257.html).
   * 
   * > This parameter also supports JSON Array format, for example: `["a9ad2ac2-3ed9-11ed-b878-0242ac12****","5cb8a9a4-198f-4651-a353-f8b28788****"]`.
   * 
   * This parameter is required.
   * 
   * @example
   * a9ad2ac2-3ed9-11ed-b878-0242ac12****
   */
  id?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
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

