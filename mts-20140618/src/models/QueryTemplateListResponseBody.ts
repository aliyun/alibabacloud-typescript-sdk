// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryTemplateListResponseBodyNonExistTids } from "./QueryTemplateListResponseBodyNonExistTids";
import { QueryTemplateListResponseBodyTemplateList } from "./QueryTemplateListResponseBodyTemplateList";


export class QueryTemplateListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IDs of the templates that do not exist. This parameter is not returned if all specified transcoding templates are found.
   */
  nonExistTids?: QueryTemplateListResponseBodyNonExistTids;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * BC860F04-778A-472F-AB39-E1BF329C1EA8
   */
  requestId?: string;
  /**
   * @remarks
   * The transcoding templates.
   */
  templateList?: QueryTemplateListResponseBodyTemplateList;
  static names(): { [key: string]: string } {
    return {
      nonExistTids: 'NonExistTids',
      requestId: 'RequestId',
      templateList: 'TemplateList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nonExistTids: QueryTemplateListResponseBodyNonExistTids,
      requestId: 'string',
      templateList: QueryTemplateListResponseBodyTemplateList,
    };
  }

  validate() {
    if(this.nonExistTids && typeof (this.nonExistTids as any).validate === 'function') {
      (this.nonExistTids as any).validate();
    }
    if(this.templateList && typeof (this.templateList as any).validate === 'function') {
      (this.templateList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

