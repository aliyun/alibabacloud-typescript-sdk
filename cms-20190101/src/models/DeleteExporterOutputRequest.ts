// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteExporterOutputRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the configuration set.
   * 
   * This parameter is required.
   * 
   * @example
   * testName
   */
  destName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      destName: 'DestName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destName: 'string',
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

