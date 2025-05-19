// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMonitoringTemplateRequest extends $dara.Model {
  id?: string;
  name?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
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

