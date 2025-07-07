// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnterpriseTodoQueryAccountTodoListByApplicantRequest extends $dara.Model {
  appName?: string;
  maxResults?: number;
  nextToken?: string;
  operatePk?: string;
  orientedEcId?: string;
  orientedLeId?: string;
  orientedNbId?: string;
  page?: number;
  pageSize?: number;
  showCompleteInfo?: boolean;
  status?: string;
  todoType?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      operatePk: 'OperatePk',
      orientedEcId: 'OrientedEcId',
      orientedLeId: 'OrientedLeId',
      orientedNbId: 'OrientedNbId',
      page: 'Page',
      pageSize: 'PageSize',
      showCompleteInfo: 'ShowCompleteInfo',
      status: 'Status',
      todoType: 'TodoType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      maxResults: 'number',
      nextToken: 'string',
      operatePk: 'string',
      orientedEcId: 'string',
      orientedLeId: 'string',
      orientedNbId: 'string',
      page: 'number',
      pageSize: 'number',
      showCompleteInfo: 'boolean',
      status: 'string',
      todoType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

