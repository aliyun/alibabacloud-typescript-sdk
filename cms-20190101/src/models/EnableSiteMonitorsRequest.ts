// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableSiteMonitorsRequest extends $dara.Model {
  regionId?: string;
  /**
   * @remarks
   * The ID of the site monitoring task. Separate multiple IDs with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * 49f7b317-7645-4cc9-94fd-ea42e522****,49f7b317-7645-4cc9-94fd-ea42e522****
   */
  taskIds?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      taskIds: 'TaskIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      taskIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

