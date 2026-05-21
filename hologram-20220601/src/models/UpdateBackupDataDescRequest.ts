// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateBackupDataDescRequest extends $dara.Model {
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * back up test
   */
  desc?: string;
  /**
   * @example
   * hgpostcn-cn-721344a2z001
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      desc: 'desc',
      instanceId: 'instanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      desc: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

