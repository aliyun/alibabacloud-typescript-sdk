// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GrafanaWorkspaceOperateLog extends $dara.Model {
  date?: number;
  detail?: string;
  grafanaWorkspaceId?: string;
  id?: number;
  operatorId?: string;
  static names(): { [key: string]: string } {
    return {
      date: 'date',
      detail: 'detail',
      grafanaWorkspaceId: 'grafanaWorkspaceId',
      id: 'id',
      operatorId: 'operatorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'number',
      detail: 'string',
      grafanaWorkspaceId: 'string',
      id: 'number',
      operatorId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

