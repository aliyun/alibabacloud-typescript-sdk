// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlussResourceSpec extends $dara.Model {
  /**
   * @remarks
   * Disk size per node, in GB.
   */
  diskSizeInGB?: number;
  /**
   * @remarks
   * Instance type of the slave nodes.
   */
  slaveModel?: string;
  /**
   * @remarks
   * Number of slave nodes.
   */
  slaveNum?: number;
  /**
   * @remarks
   * Number of CUs for the post-tiering stage.
   */
  tieringPostCu?: number;
  /**
   * @remarks
   * Number of compute units (CUs) for the pre-tiering stage.
   */
  tieringPreCu?: number;
  static names(): { [key: string]: string } {
    return {
      diskSizeInGB: 'DiskSizeInGB',
      slaveModel: 'SlaveModel',
      slaveNum: 'SlaveNum',
      tieringPostCu: 'TieringPostCu',
      tieringPreCu: 'TieringPreCu',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskSizeInGB: 'number',
      slaveModel: 'string',
      slaveNum: 'number',
      tieringPostCu: 'number',
      tieringPreCu: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

