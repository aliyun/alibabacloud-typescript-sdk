// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendMseIncidentRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  incidents?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      incidents: 'Incidents',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      incidents: 'string',
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

