// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAddonReleaseRequest extends $dara.Model {
  /**
   * @remarks
   * The environment ID.
   * 
   * This parameter is required.
   * 
   * @example
   * env-xxx
   */
  environmentId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the add-on release.
   * 
   * This parameter is required.
   * 
   * @example
   * agent-822567d4-2449
   */
  releaseName?: string;
  static names(): { [key: string]: string } {
    return {
      environmentId: 'EnvironmentId',
      regionId: 'RegionId',
      releaseName: 'ReleaseName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      environmentId: 'string',
      regionId: 'string',
      releaseName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

