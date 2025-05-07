// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListPlanningProposalResponseBodyDataOutlines } from "./ListPlanningProposalResponseBodyDataOutlines";


export class ListPlanningProposalResponseBodyData extends $dara.Model {
  outlines?: ListPlanningProposalResponseBodyDataOutlines[];
  summary?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      outlines: 'Outlines',
      summary: 'Summary',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outlines: { 'type': 'array', 'itemType': ListPlanningProposalResponseBodyDataOutlines },
      summary: 'string',
      title: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.outlines)) {
      $dara.Model.validateArray(this.outlines);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

