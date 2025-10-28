// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnbindK8sSlbRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application. You can call the ListApplication operation to query the application ID. For more information, see [ListApplication](https://help.aliyun.com/document_detail/149390.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 5a166fbd-****-****-a286-781659d9f54c
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the cluster. You can call the GetK8sCluster operation to query the cluster ID. For more information, see [GetK8sCluster](https://help.aliyun.com/document_detail/181437.html).
   * 
   * @example
   * 712082c3-****-****-9217-a947b5cde6ee
   */
  clusterId?: string;
  /**
   * @remarks
   * The name of the SLB instance.
   * 
   * @example
   * a2d4ab12666544a479cdd0711a97****
   */
  slbName?: string;
  /**
   * @remarks
   * The type of the SLB instance. Valid values:
   * 
   * *   **internet**: Internet-facing SLB instance
   * *   **intranet**: internal-facing SLB instance
   * 
   * This parameter is required.
   * 
   * @example
   * internet
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      clusterId: 'ClusterId',
      slbName: 'SlbName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      clusterId: 'string',
      slbName: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

