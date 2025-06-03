// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeMigrationJobCountRequestTagList } from "./DescribeMigrationJobCountRequestTagList";


export class DescribeMigrationJobCountRequest extends $dara.Model {
  batchTaskGroupId?: number;
  cutoverPlanId?: string;
  name?: string;
  outSideId?: string;
  source?: string;
  surveyResourceId?: number;
  tagList?: DescribeMigrationJobCountRequestTagList[];
  type?: string;
  typeList?: string[];
  usedType?: string;
  static names(): { [key: string]: string } {
    return {
      batchTaskGroupId: 'batchTaskGroupId',
      cutoverPlanId: 'cutoverPlanId',
      name: 'name',
      outSideId: 'outSideId',
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
      source: 'string',
      surveyResourceId: 'number',
      tagList: { 'type': 'array', 'itemType': DescribeMigrationJobCountRequestTagList },
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

