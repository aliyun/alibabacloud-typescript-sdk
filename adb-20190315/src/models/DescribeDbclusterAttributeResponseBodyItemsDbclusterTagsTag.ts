// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClusterAttributeResponseBodyItemsDBClusterTagsTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * >  You can call the [TagResources](https://help.aliyun.com/document_detail/179253.html) operation to add a tag to the cluster.
   * 
   * @example
   * tag1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * test1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

