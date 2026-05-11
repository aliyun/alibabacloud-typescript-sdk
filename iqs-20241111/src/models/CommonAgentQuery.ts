// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CommonAgentQuery extends $dara.Model {
  limit?: number;
  query?: string;
  querySceneEnumCode?: string;
  searchModel?: string;
  static names(): { [key: string]: string } {
    return {
      limit: 'limit',
      query: 'query',
      querySceneEnumCode: 'querySceneEnumCode',
      searchModel: 'searchModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      query: 'string',
      querySceneEnumCode: 'string',
      searchModel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

