// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeContainerServiceK8sClusterNamespacesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster. Note: This parameter is required. If this parameter is not specified, the API returns InvalidParam (400).
   * 
   * @example
   * cf4435fefd45d4b1b8643f3a0bea3****
   */
  clusterId?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The IP address of the access source.
   * 
   * @example
   * 140.205.XXX.XXX
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      resourceOwnerId: 'ResourceOwnerId',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      resourceOwnerId: 'number',
      sourceIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

