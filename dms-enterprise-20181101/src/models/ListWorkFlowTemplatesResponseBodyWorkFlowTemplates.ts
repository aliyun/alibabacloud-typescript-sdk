// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListWorkFlowTemplatesResponseBodyWorkFlowTemplatesWorkFlowTemplate } from "./ListWorkFlowTemplatesResponseBodyWorkFlowTemplatesWorkFlowTemplate";


export class ListWorkFlowTemplatesResponseBodyWorkFlowTemplates extends $dara.Model {
  workFlowTemplate?: ListWorkFlowTemplatesResponseBodyWorkFlowTemplatesWorkFlowTemplate[];
  static names(): { [key: string]: string } {
    return {
      workFlowTemplate: 'WorkFlowTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workFlowTemplate: { 'type': 'array', 'itemType': ListWorkFlowTemplatesResponseBodyWorkFlowTemplatesWorkFlowTemplate },
    };
  }

  validate() {
    if(Array.isArray(this.workFlowTemplate)) {
      $dara.Model.validateArray(this.workFlowTemplate);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

