// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceInstancesRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The parameter name of the filter. You can specify one or more filters. Valid values:
   * 
   * *   Name: The service name. If you want to perform a fuzzy match, specify the service name in the *xxx* format. For example, if the service name is My Service, you can set the filter value to *My* or *Service*.
   * *   ServiceInstanceId: The ID of the service instance.
   * *   ServiceId: The service ID.
   * *   UserId: The user ID.
   * *   Version: The service version.
   * *   Status: The status of the service instance.
   * *   DeployType: The deployment type of the service.
   * *   ServiceType: The service type.
   * *   OperationStartTimeBefore: The time before the hosted O\\&M starts.
   * *   OperationStartTimeAfter: The time after the hosted O\\&M starts.
   * *   OperationEndTimeBefore: The time before the hosted O\\&M ends.
   * *   OperationEndTimeAfter: The time after the hosted O\\&M ends.
   * *   OperatedServiceInstanceId: The ID of the hosted O\\&M instance that belongs to a private service.
   * *   OperationServiceInstanceId: The ID of the hosted O\\&M service instance that belongs to a hosted O\\&M service.
   * *   EnableInstanceOps: Whether the hosted O\\&M feature is enabled for service instances.
   * 
   * @example
   * ServiceInstanceId
   */
  name?: string;
  /**
   * @remarks
   * The parameter values of the filter.
   */
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.value)) {
      $dara.Model.validateArray(this.value);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

