// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAlertTemplatesRequest extends $dara.Model {
  alertProvider?: string;
  labels?: string;
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  status?: boolean;
  templateProvider?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      alertProvider: 'AlertProvider',
      labels: 'Labels',
      name: 'Name',
      regionId: 'RegionId',
      status: 'Status',
      templateProvider: 'TemplateProvider',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertProvider: 'string',
      labels: 'string',
      name: 'string',
      regionId: 'string',
      status: 'boolean',
      templateProvider: 'string',
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

