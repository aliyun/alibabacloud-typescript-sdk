// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListMigrationJobsRequestTagList } from "./ListMigrationJobsRequestTagList";


export class ListMigrationJobsRequest extends $dara.Model {
  batchTaskGroupId?: number;
  cutoverPlanId?: string;
  name?: string;
  outSideId?: string;
  pageNum?: number;
  pageSize?: number;
  sortCol?: string;
  sortType?: string;
  source?: string;
  surveyResourceId?: number;
  tagList?: ListMigrationJobsRequestTagList[];
  type?: string;
  typeList?: string[];
  usedType?: string;
  static names(): { [key: string]: string } {
    return {
      batchTaskGroupId: 'batchTaskGroupId',
      cutoverPlanId: 'cutoverPlanId',
      name: 'name',
      outSideId: 'outSideId',
      pageNum: 'pageNum',
      pageSize: 'pageSize',
      sortCol: 'sortCol',
      sortType: 'sortType',
      source: 'source',
      surveyResourceId: 'surveyResourceId',
      tagList: 'tagList',
      type: 'type',
      typeList: 'typeList',
      usedType: 'usedType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchTaskGroupId: 'number',
      cutoverPlanId: 'string',
      name: 'string',
      outSideId: 'string',
      pageNum: 'number',
      pageSize: 'number',
      sortCol: 'string',
      sortType: 'string',
      source: 'string',
      surveyResourceId: 'number',
      tagList: { 'type': 'array', 'itemType': ListMigrationJobsRequestTagList },
      type: 'string',
      typeList: { 'type': 'array', 'itemType': 'string' },
      usedType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tagList)) {
      $dara.Model.validateArray(this.tagList);
    }
    if(Array.isArray(this.typeList)) {
      $dara.Model.validateArray(this.typeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

