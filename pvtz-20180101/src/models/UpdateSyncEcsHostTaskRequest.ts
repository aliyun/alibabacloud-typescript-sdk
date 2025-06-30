// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateSyncEcsHostTaskRequestRegion } from "./UpdateSyncEcsHostTaskRequestRegion";


export class UpdateSyncEcsHostTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * Default value: en.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The regions to be synchronized.
   * 
   * This parameter is required.
   */
  region?: UpdateSyncEcsHostTaskRequestRegion[];
  /**
   * @remarks
   * The state of the hostname synchronization task. Valid values:
   * 
   * *   ON: The task is started.
   * *   OFF: The task is ended.
   * 
   * This parameter is required.
   * 
   * @example
   * ON
   */
  status?: string;
  /**
   * @remarks
   * The zone ID. This ID uniquely identifies the zone.
   * 
   * This parameter is required.
   * 
   * @example
   * df2d03865266bd9842306db586d3****
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      region: 'Region',
      status: 'Status',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      region: { 'type': 'array', 'itemType': UpdateSyncEcsHostTaskRequestRegion },
      status: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.region)) {
      $dara.Model.validateArray(this.region);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

