// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteClusterRequestDeleteOptions extends $dara.Model {
  /**
   * @remarks
   * The deletion policy for the specified type of resource. Valid values:
   * 
   * *   delete: deletes the specified type of resource.
   * *   retain: retains the specified type of resource.
   * 
   * @example
   * delete
   */
  deleteMode?: string;
  /**
   * @remarks
   * The type of the resource. Valid values:
   * 
   * *   SLB: SLB resources created for Services. By default, the SLB resources are automatically deleted.
   * *   ALB: Application Load Balancer (ALB) resources created by the ALB Ingress controller. By default, the ALB resources are retained.
   * *   SLS_Data: Simple Log Service projects used by the cluster logging feature. By default, the Simple Log Service projects are retained.
   * *   SLS_ControlPlane: Simple Log Service projects used to store the logs of control planes in ACK managed clusters. By default, the Simple Log Service projects are retained.
   * *   PrivateZone: PrivateZone resources created by ACK Serverless clusters. By default, the PrivateZone resources are retained.
   * 
   * @example
   * SLS_Data
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      deleteMode: 'delete_mode',
      resourceType: 'resource_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteMode: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

