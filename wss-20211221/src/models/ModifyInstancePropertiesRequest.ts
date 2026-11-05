// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstancePropertiesRequestProperties extends $dara.Model {
  /**
   * @remarks
   * The name of the instance attribute. For example, DisableRemainingNotify specifies whether to disable the remaining duration reminder for the client, and PackageUsedUpStrategy specifies the policy applied when the package duration is used up.
   * 
   * @example
   * DisableRemainingNotify
   */
  key?: string;
  /**
   * @remarks
   * The value of the instance attribute. When Key is set to DisableRemainingNotify, only the string true or false is supported, and ResourceType must be set to DurationPackage. A value of true indicates that the remaining duration reminder for the client is disabled. A value of false indicates that the reminder is retained and triggered based on the original conditions. Administrator notifications continue to be triggered based on the original conditions. For other attributes, pass values based on their respective definitions.
   * 
   * @example
   * true
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
   * The instance IDs.
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
   * The list of instance attributes to modify. You can modify multiple key-value pairs at a time. These pairs are merged with the original Key and Value request parameters. If an attribute with the same name has the same value, it is deduplicated. If the values are different, a parameter error is returned.
   */
  properties?: ModifyInstancePropertiesRequestProperties[];
  /**
   * @remarks
   * The resource type.
   * > This parameter is case-sensitive. Ensure correct spelling.
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
   * - PackageUsedUpStrategy: [enum]
   *    - Postpaid (switches to the pay-as-you-go billing method)
   *    - Shutdown (hibernates or shuts down the instance)
   *    - Maintenance (stops the instance and enters O&M mode, and does not allow client connections)
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
      properties: 'Properties',
      resourceType: 'ResourceType',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      key: 'string',
      properties: { 'type': 'array', 'itemType': ModifyInstancePropertiesRequestProperties },
      resourceType: 'string',
      value: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    if(Array.isArray(this.properties)) {
      $dara.Model.validateArray(this.properties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

