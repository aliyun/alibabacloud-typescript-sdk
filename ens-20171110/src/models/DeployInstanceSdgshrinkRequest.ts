// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeployInstanceSDGShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The deployment type of the SDG. shared: shared read/write splitting deployment. The content of the SDG is read-only, and data updates are written to the local storage of the instance.
   * 
   * @example
   * shared
   */
  deploymentType?: string;
  diskAccessProtocol?: string;
  diskType?: string;
  /**
   * @remarks
   * The IDs of the instances. The value is a JSON array that consists of up to 100 IDs.
   * 
   * This parameter is required.
   */
  instanceIdsShrink?: string;
  /**
   * @remarks
   * The ID of the SDG.
   * 
   * This parameter is required.
   * 
   * @example
   * sdg-xxxx
   */
  SDGId?: string;
  static names(): { [key: string]: string } {
    return {
      deploymentType: 'DeploymentType',
      diskAccessProtocol: 'DiskAccessProtocol',
      diskType: 'DiskType',
      instanceIdsShrink: 'InstanceIds',
      SDGId: 'SDGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentType: 'string',
      diskAccessProtocol: 'string',
      diskType: 'string',
      instanceIdsShrink: 'string',
      SDGId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

