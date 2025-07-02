// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOperationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster that you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * c-b933c5aac8fe****
   */
  clusterId?: string;
  /**
   * @remarks
   * The operation ID.
   * 
   * References:
   * 
   * *   [CreateCluster](https://help.aliyun.com/document_detail/454393.html)
   * *   [IncreaseNodes](https://help.aliyun.com/document_detail/454397.html)
   * 
   * This parameter is required.
   * 
   * @example
   * op-13c37a77c505****
   */
  operationId?: string;
  /**
   * @remarks
   * The district ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      operationId: 'OperationId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      operationId: 'string',
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

