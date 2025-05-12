// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteResourceInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to delete all the instances that fail to be created. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  allFailed?: boolean;
  /**
   * @remarks
   * The instances. Separate multiple instances with commas (,), such as `instanceId1,instanceId2`. For more information about how to query the instances, see [ListResourceInstances](https://help.aliyun.com/document_detail/412129.html).
   * 
   * @example
   * eas-i-xxxxxxx,eas-i-xxxxxxx
   */
  instanceList?: string;
  static names(): { [key: string]: string } {
    return {
      allFailed: 'AllFailed',
      instanceList: 'InstanceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allFailed: 'boolean',
      instanceList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

