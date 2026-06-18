// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteGdnInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the GDN instance.
   * 
   * This parameter is required.
   * 
   * @example
   * gdn-yq****dorhkzttoi
   */
  gdnInstanceName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      gdnInstanceName: 'GdnInstanceName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gdnInstanceName: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

