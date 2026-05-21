// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateManualBackupRequest extends $dara.Model {
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * hgpostcn-cn-721344a2z001
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'instanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
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

