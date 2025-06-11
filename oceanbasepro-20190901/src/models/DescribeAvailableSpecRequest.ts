// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAvailableSpecRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ob317v4uif****
   */
  instanceId?: string;
  /**
   * @example
   * oceanbase.cluster.cd8.xlarge
   */
  spec?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * upgradespec
   */
  upgradeType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      spec: 'Spec',
      upgradeType: 'UpgradeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      spec: 'string',
      upgradeType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

