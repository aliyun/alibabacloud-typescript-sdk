// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstancePropertiesRequest extends $dara.Model {
  /**
   * @example
   * mdp-0c62ayep0nk4v****
   */
  instanceId?: string;
  instanceIds?: string[];
  /**
   * @example
   * PackageUsedUpStrategy
   */
  key?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * DurationPackage
   */
  resourceType?: string;
  /**
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

