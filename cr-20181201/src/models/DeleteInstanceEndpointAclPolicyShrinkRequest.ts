// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteInstanceEndpointAclPolicyShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The endpoint type. Only Internet is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * internet
   */
  endpointType?: string;
  /**
   * @remarks
   * The list of public access whitelist entries to delete for the instance.
   */
  entriesShrink?: string;
  /**
   * @remarks
   * The IP CIDR block.
   * 
   * @example
   * 127.0.0.1/32
   * 
   * @deprecated
   */
  entry?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-xkx6vujuhay0****
   */
  instanceId?: string;
  /**
   * @remarks
   * The module for which the access policy is configured. Valid values:
   * 
   * - `Registry`: Access to the image repository.
   * 
   * - `Chart`: Access to Helm Chart.
   * 
   * @example
   * Chart
   */
  moduleName?: string;
  static names(): { [key: string]: string } {
    return {
      endpointType: 'EndpointType',
      entriesShrink: 'Entries',
      entry: 'Entry',
      instanceId: 'InstanceId',
      moduleName: 'ModuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointType: 'string',
      entriesShrink: 'string',
      entry: 'string',
      instanceId: 'string',
      moduleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

