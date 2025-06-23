// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAutoCcListCountRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * > You can call the **DescribeInstanceIds** operation to query the IDs of all instances.
   * 
   * This parameter is required.
   * 
   * @example
   * ddoscoo-cn-mp91j1ao****
   */
  instanceId?: string;
  /**
   * @remarks
   * The mode of how an IP address is added to the whitelist or blacklist. Valid values:
   * 
   * *   **manual**: manually added
   * *   **auto**: automatically added
   * 
   * @example
   * manual
   */
  queryType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      queryType: 'QueryType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      queryType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

