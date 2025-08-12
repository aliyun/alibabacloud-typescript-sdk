// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteHybridMonitorNamespaceRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the namespace.
   * 
   * For information about how to obtain the name of a namespace, see [DescribeHybridMonitorNamespaceList](https://help.aliyun.com/document_detail/428880.html).
   * 
   * This parameter is required.
   * 
   * @example
   * aliyun
   */
  namespace?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'Namespace',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
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

