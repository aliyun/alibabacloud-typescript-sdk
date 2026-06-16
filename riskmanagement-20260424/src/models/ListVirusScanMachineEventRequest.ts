// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVirusScanMachineEventRequest extends $dara.Model {
  currentPage?: number;
  lang?: string;
  operateTaskId?: string;
  pageSize?: number;
  regionId?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      lang: 'Lang',
      operateTaskId: 'OperateTaskId',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      lang: 'string',
      operateTaskId: 'string',
      pageSize: 'number',
      regionId: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

