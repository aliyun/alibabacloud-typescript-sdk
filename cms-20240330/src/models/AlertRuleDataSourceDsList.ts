// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AlertRuleDataSourceDsList extends $dara.Model {
  project?: string;
  regionId?: string;
  store?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      project: 'project',
      regionId: 'regionId',
      store: 'store',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: 'string',
      regionId: 'string',
      store: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

