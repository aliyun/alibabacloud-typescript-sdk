// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstancePropertiesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * mdp-0c62ayep0nk4v****
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance ID.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The key of the attribute.
   * 
   * @example
   * PackageUsedUpStrategy
   */
  key?: string;
  /**
   * @remarks
   * The resource type.
   * > This parameter is case-sensitive. Ensure that the value is spelled correctly.
   * 
   * This parameter is required.
   * 
   * @example
   * DurationPackage
   */
  resourceType?: string;
  /**
   * @remarks
   * The value of the attribute.
   * 
   * - PackageUsedUpStrategy: Valid values:
   *    - Postpaid: Enters the pay-as-you-go phase.
   *    - Shutdown: Hibernation.
   *    - Maintenance: Shuts down and enters O&M mode. Client connections are not allowed.
   * 
   * @example
   * Postpaid
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceIds: 'InstanceIds',
      key: 'Key',
      resourceType: 'ResourceType',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      key: 'string',
      resourceType: 'string',
      value: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

