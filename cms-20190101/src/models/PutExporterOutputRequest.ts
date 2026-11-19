// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutExporterOutputRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  configJson?: string;
  desc?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  destName?: string;
  destType?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      configJson: 'ConfigJson',
      desc: 'Desc',
      destName: 'DestName',
      destType: 'DestType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configJson: 'string',
      desc: 'string',
      destName: 'string',
      destType: 'string',
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

