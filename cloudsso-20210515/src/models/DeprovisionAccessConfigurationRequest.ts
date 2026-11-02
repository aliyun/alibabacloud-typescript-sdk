// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeprovisionAccessConfigurationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the access configuration.
   * 
   * @example
   * ac-00jhtfl8thteu6uj****
   */
  accessConfigurationId?: string;
  /**
   * @remarks
   * The directory ID.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the deployment target belongs.
   * 
   * @example
   * 114240524784****
   */
  originTargetId?: string;
  /**
   * @remarks
   * The ID of the task target.
   * 
   * @example
   * 114240524784****
   */
  targetId?: string;
  /**
   * @remarks
   * The type of the task target. Valid values:
   * - RD-Account: The task target is an account in a resource directory.
   * 
   * @example
   * RD-Account
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      accessConfigurationId: 'AccessConfigurationId',
      directoryId: 'DirectoryId',
      originTargetId: 'OriginTargetId',
      targetId: 'TargetId',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessConfigurationId: 'string',
      directoryId: 'string',
      originTargetId: 'string',
      targetId: 'string',
      targetType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

