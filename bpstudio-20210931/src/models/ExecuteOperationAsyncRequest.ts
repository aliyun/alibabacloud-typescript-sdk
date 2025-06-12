// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteOperationASyncRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Cloud Architect Design Tools (CADT) application.
   * 
   * @example
   * BG**********UQ
   */
  applicationId?: string;
  /**
   * @remarks
   * The parameters related to the action. Specify the parameters based on the value of Operation. The parameters are passed in the map format. The following examples show how to specify the parameters if you want to change the specifications of an Elastic Compute Service (ECS) instance:
   * 
   * *   The following common parameters are required: change_type, regionId, instanceId, appId
   * *   Example values for changing the instance type of the ECS instance: { "ServiceType": "ecs", "Operation": "modifyInstanceType", "Attributes": "{"change_type":"modify_instance_type","instance_type":"ecs.hfr7.2xlarge","instanceId":"i-xxxxxxxxx","regionId":"cn-beijing","appId":"xxxxxxxxxxxxx"}" }
   * *   Example values for stopping the ECS instance: { "ServiceType": "ecs", "Operation": "modifyInstanceType", "Attributes": "{"change_type":"modify_status","status":"Stopped","instanceId":"i-xxxxxxxxx","regionId":"cn-beijing","appId":"xxxxxxxxxxxxx"}" }
   * *   Example values for starting the ECS instance: { "ServiceType": "ecs", "Operation": "modifyInstanceType", "Attributes": "{"change_type":"modify_status","status":"Running","instanceId":"i-xxxxxxxxx","regionId":"cn-beijing","appId":"xxxxxxxxxxxxx"}" }
   * *   Example values for restarting the ECS instance: { "ServiceType": "ecs", "Operation": "modifyInstanceType", "Attributes": "{"change_type":"modify_status","status":"Restart","instanceId":"i-xxxxxxxxx","regionId":"cn-beijing","appId":"xxxxxxxxxxxxx"}" }
   * 
   * Example of enumerating more than one set of parameters:
   * 
   * *   { "ServiceType": "ecs", "Operation": "modifyInstanceType", "Attributes": "{\\\\"change_type\\\\":\\\\"modify_instance_type\\\\",\\\\"instance_type\\\\":\\\\"ecs.hfr7.2xlarge\\\\",\\\\"instanceId\\\\":\\\\"i-xxxxxxxxx\\\\",\\\\"regionId\\\\":\\\\"cn-beijing\\\\",\\\\"appId\\\\":\\\\"xxxxxxxxxxxxx\\\\"}" }
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     { "ServiceType": "ecs", "Operation": "modifyInstanceType", "Attributes": "{\\\\"change_type\\\\":\\\\"modify_instance_type\\\\",\\\\"instance_type\\\\":\\\\"ecs.hfr7.2xlarge\\\\",\\\\"instanceId\\\\":\\\\"i-xxxxxxxxx\\\\",\\\\"regionId\\\\":\\\\"cn-beijing\\\\",\\\\"appId\\\\":\\\\"xxxxxxxxxxxxx\\\\"}" }
   * 
   *     <!-- -->
   */
  attributes?: { [key: string]: any };
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * 1600765710019
   */
  clientToken?: string;
  /**
   * @remarks
   * This operation type is the operation type of modifying the product, some operation types are generic, and some are used alone. The following is an example of ECS deployment:
   * - The name of the ECS: rename
   * - Specification of ecs: modifyInstanceType
   * - Startup of ecs: modifyInstanceType
   * - Stop of ecs: modifyInstanceType
   * - Restart of ecs: modifyInstanceType
   * - Ecs Tag: addTags
   * - Deletion of ecs: ecsDelete
   * - Paid type for ecs: modifyPayType
   * 
   * This parameter is required.
   * 
   * @example
   * queryTopo
   */
  operation?: string;
  /**
   * @remarks
   * Resource group ID, which is used to verify the permissions of the resource group
   * 
   * @example
   * ceshi
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The type of the service. If you want to perform operations on an Elastic Compute Service (ECS) instance, set ServiceType to ecs.
   * 
   * This parameter is required.
   * 
   * @example
   * ACK
   */
  serviceType?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      attributes: 'Attributes',
      clientToken: 'ClientToken',
      operation: 'Operation',
      resourceGroupId: 'ResourceGroupId',
      serviceType: 'ServiceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      attributes: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      clientToken: 'string',
      operation: 'string',
      resourceGroupId: 'string',
      serviceType: 'string',
    };
  }

  validate() {
    if(this.attributes) {
      $dara.Model.validateMap(this.attributes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

