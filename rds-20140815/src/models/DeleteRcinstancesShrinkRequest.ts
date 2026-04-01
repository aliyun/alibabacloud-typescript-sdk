// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRCInstancesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, service limits, and insufficient inventory errors.
   * *   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, the instance is created.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Specifies whether to forcefully release a running instance. Valid values:
   * 
   * *   **Yes**
   * *   **No** (default)
   * 
   * @example
   * Yes
   */
  force?: boolean;
  /**
   * @remarks
   * The details of the instance.
   * 
   * This parameter is required.
   */
  instanceIdShrink?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Specifies whether to release an expired subscription instance. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * @example
   * true
   */
  terminateSubscription?: boolean;
  static names(): { [key: string]: string } {
    return {
      dryRun: 'DryRun',
      force: 'Force',
      instanceIdShrink: 'InstanceId',
      regionId: 'RegionId',
      terminateSubscription: 'TerminateSubscription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'boolean',
      force: 'boolean',
      instanceIdShrink: 'string',
      regionId: 'string',
      terminateSubscription: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

